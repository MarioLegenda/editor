import { Header } from '@/features/editor/explorer/components/Header';
import { Main as FileExplorer } from '@/features/editor/explorer/components/fileExplorer/Main';

export function Main() {
	return <>
		<Header />

		<FileExplorer />
	</>;
}