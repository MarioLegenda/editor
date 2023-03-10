export function createTabFromFile(file: AppFile): Tab {
  return {
    id: file.id,
    name: file.name,
    projectId: file.project_id,
    userId: file.user_id,
    parent: file.parent,
    fileType: file.file_type,
    fileExtension: file.file_extension,
  };
}
