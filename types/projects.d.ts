interface NewProject {
  name: string;
  description: string;
}

interface EditProject {
  name: string;
  description: string;
}

interface Project {
  id: string;
  color: string;
  user_id: string;
  name: string;
  description: string;
}

interface DeleteProject {
  id: string;
  userId: string;
}

interface ProjectAutocompleteList {
  id: string;
  value: string;
  description: string;
  color: string;
}

interface File {
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

type ProjectWithFiles = Project & {files: File[]};