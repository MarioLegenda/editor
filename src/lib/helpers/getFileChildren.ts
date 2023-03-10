function getChildrenRecursively(searchFile: AppFile, files: AppFile[]) {
	let children: AppFile[] = [];
	for (const file of files) {
		const found = file.parent === searchFile.id;
		if (found) {
			children.push({ ...file });
		}

		if (file.is_directory && found) {
			children = [...getChildrenRecursively(file, files), ...children];
		}
	}

	return children;
}

export function getFileChildren(file: AppFile, files: AppFile[]) {
	return getChildrenRecursively(file, files);
}
