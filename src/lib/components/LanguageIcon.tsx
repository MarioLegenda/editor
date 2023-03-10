import TypescriptIcon from '/public/editor/Typescript.svg';
import JavascriptIcon from '/public/editor/Javascript.svg';
import YamlIcon from '/public/editor/Yaml.svg';
import JsonIcon from '/public/editor/Json.svg';
import AnyFileIcon from '/public/editor/file.svg';

interface Props {
  fileType: FileType | null;
  name?: string;
}

function deriveExtension(name: string | undefined): string {
  if (!name) return '';

  const split = name.split('.');

  const ext = split[split.length - 1];

  if (ext) {
    return ext;
  }

  return '';
}

export function LanguageIcon({ fileType, name }: Props) {
  const ext = deriveExtension(name);

  if (fileType === 'typescript' || ext === 'ts')
    return <TypescriptIcon width={20} />;
  if (fileType === 'javascript' || ext === 'js')
    return <JavascriptIcon width={20} />;
  if (fileType === 'yaml' || ext === 'yaml' || ext === 'yml')
    return <YamlIcon width={20} />;
  if (fileType === 'json' || ext === 'json') return <JsonIcon width={20} />;

  return <AnyFileIcon width={20} />;
}
