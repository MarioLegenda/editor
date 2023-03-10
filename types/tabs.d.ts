interface Tab {
  id: string;
  name: string;
  projectId: string;
  userId: string;
  parent: string | null;
  fileType: FileType | null;
  fileExtension: ExtensionType[] | null;
}

interface RawHistory {
  id: string;
  projectId: string;
  selected: string | Tab;
  history: string | Tab[];
}

interface TabsHistory {
  id: string;
  projectId: string;
  selected: Tab;
  history: Tab[];
}
