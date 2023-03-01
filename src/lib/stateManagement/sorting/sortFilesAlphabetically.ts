export function sortFilesAlphabetically(files: AppFile[], parentId: string): AppFile[] {
	const directories = files.filter((item) => item.is_directory && item.parent === parentId);
	directories.sort((a, b) => {
		if(a.name < b.name) { return -1; }
		if(a.name > b.name) { return 1; }
		return 0;
	});

	const fs = files.filter((item) => !item.is_directory && item.parent === parentId);
	fs.sort((a, b) => {
		if(a.name < b.name) { return -1; }
		if(a.name > b.name) { return 1; }
		return 0;
	});

	return [...directories, ...fs];
}