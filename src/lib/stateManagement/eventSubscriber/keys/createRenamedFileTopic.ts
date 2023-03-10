export function createRenamedFileTopic(
  id: string,
  isDirectory: boolean,
): string {
  return `renamed_${isDirectory ? 'directory' : 'file'}.${id}`;
}
