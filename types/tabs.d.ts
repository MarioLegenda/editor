interface Tab {
  id: string;
  name: string;
  projectId: string;
  userId: string;
  parent: string | null;
  fileType: FileType | null;
  fileExtension: ExtensionType | null;
}
