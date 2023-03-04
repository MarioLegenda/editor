type FileType = 'typescript' | 'javascript' | 'yaml' | 'json' | 'default';
type ExtensionType = 'ts' | 'js' | 'yml' | 'yaml' | 'json';

interface NewFile {
  name: string;
  isDirectory: boolean;
  parent: string;
  projectId: string;
  fileType: FileType | null;
  extension: ExtensionType[] | null;
}

interface UpdatedContent {
  fileId: string;
  projectId: string;
  content: string;
}

interface FileToDelete {
  projectId: string;
  fileId: string;
}

interface AppFile {
  id: string;
  name: string;
  project_id: string;
  user_id: string;
  parent: string | null;
  is_directory: boolean;
  file_type: FileType | null;
  file_extension: ExtensionType | null;

  created_at: string;
  updated_at: string;
}

interface CachedContentPayload {
  id: string;
  projectId: string;
  userId: string;
}

interface CachedContentEvent {
  id: string;
  projectId: string;
  userId: string;
  content: string;
}
