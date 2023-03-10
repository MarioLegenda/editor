export function doesFileExist(
	files: AppFile[],
	parent: string,
	name: string,
	projectId: string,
) {
	for (const file of files) {
		if (
			file.parent === parent &&
      file.project_id === projectId &&
      file.name === name &&
      !file.is_directory
		) {
			return true;
		}
	}

	return false;
}
