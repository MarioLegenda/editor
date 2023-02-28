type FileType = 'typescript' | 'javascript' | 'yaml' | 'json' | 'default';
type ExtensionType = 'ts' | 'js' | 'yml' | 'yaml' | 'json';

interface NewFile {
  name: string;
  isDirectory: boolean;
  parent: string;
  projectId: string;
  fileType: FileType;
  extension: ExtensionType[];
}