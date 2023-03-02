import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';

export function isFileListing(items: unknown): items is AppFile[] {
	if (Array.isArray(items) && items.length === 0) {
		return true;
	}

	return isFile((items as AppFile[])[0]);
}