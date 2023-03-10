import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';

export function isFileListing(items: unknown): items is AppFile[] {
  if (items && Array.isArray(items) && items.length === 0) {
    return true;
  }

  return Boolean(items) && isFile((items as AppFile[])[0]);
}
