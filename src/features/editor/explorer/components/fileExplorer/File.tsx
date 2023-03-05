import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import { ContextMenuTrigger } from 'rctx-contextmenu';
import { AbstractContextMenu } from '@/features/editor/explorer/components/fileExplorer/contextMenu/AbstractContextMenu';
import { useCallback, useEffect, useState } from 'react';
import { SelectedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedFileSubscriber';
import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';
import PubSub from 'pubsub-js';
import { useAddTab } from '@/lib/stateManagement/tabs/setters';
import { createTabFromFile } from '@/lib/helpers/createTabFromFile';
import { SelectedTabSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedTabSubscriber';

interface Props {
  item: AppFile;
  isRoot: boolean;
  childSpace: number;
}

export function File({ item, isRoot = false, childSpace }: Props) {
  const [selectedFile, setSelectedFile] = useState<string>();
  const nextChildSpace = childSpace + 3;
  const addTab = useAddTab();

  useEffect(() => {
    const unsubscribe = SelectedFileSubscriber.create().subscribe(
      item.id,
      (selected, data) => {
        if (isFile(data)) {
          setSelectedFile(data.id);

          return;
        }

        setSelectedFile(undefined);
      },
    );

    return () => {
      PubSub.unsubscribe(unsubscribe);
    };
  }, []);

  const onAddTab = useCallback(() => {
    const tab = createTabFromFile(item);

    addTab(tab);
    SelectedTabSubscriber.create().publish(item.id, tab);
  }, []);

  return (
    <div
      css={[styles.root]}
      onDoubleClick={onAddTab}
      onClick={(e) => {
        if (!e.detail || e.detail == 1) {
          SelectedFileSubscriber.create().publish(item.id, item);
        }
      }}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*
          // @ts-ignore */}
      <ContextMenuTrigger id={item.id}>
        <div
          css={[
            styles.content,
            styles.move(isRoot ? 5 : nextChildSpace),
            selectedFile === item.id ? styles.open : undefined,
          ]}>
          <LanguageIcon fileType={item.file_type as FileType} />

          <p>{item.name}</p>
        </div>
      </ContextMenuTrigger>

      <AbstractContextMenu
        isDirectory={item.is_directory}
        projectId={item.project_id}
        id={item.id}
      />
    </div>
  );
}
