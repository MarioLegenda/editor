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