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