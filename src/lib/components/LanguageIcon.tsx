import TypescriptIcon from '/public/editor/Typescript.svg';
import JavascriptIcon from '/public/editor/Javascript.svg';
import YamlIcon from '/public/editor/Yaml.svg';
import JsonIcon from '/public/editor/Json.svg';
import AnyFileIcon from '/public/editor/file.svg';

interface Props {
  fileType: FileType;
}

export function LanguageIcon({ fileType }: Props) {
  if (fileType === 'typescript') return <TypescriptIcon width={20} />;
  if (fileType === 'default') return <AnyFileIcon width={20} />;
  if (fileType === 'javascript') return <JavascriptIcon width={20} />;
  if (fileType === 'yaml') return <YamlIcon width={20} />;
  if (fileType === 'json') return <JsonIcon width={20} />;

  return <AnyFileIcon width={20} />;
}
