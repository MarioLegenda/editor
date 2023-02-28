export class FileMetadata {
	private readonly type: FileType = 'default';
	private readonly ext: ExtensionType[] = ['json'];
	private readonly originalFile: string = '';
	private readonly fileName: string = '';

	private constructionError: string | null = null;

	static create(file: string) {
		return new FileMetadata(file);
	}
  
	private constructor(original: string) {
		const parsed = this.parseFile(original);
		if (!Array.isArray(parsed)) return;

		this.originalFile = original;
		this.fileName = parsed[0];
		this.ext = [parsed[1] as ExtensionType];
		this.type = this.extToType(this.ext[0]);
	}

	extension(): ExtensionType[] {
		return this.ext;
	}

	fileType(): FileType {
		return this.type;
	}

	original(): string {
		return this.originalFile;
	}

	upperCaseFileType(): string {
		return `${this.fileType().substring(0, 1).toUpperCase()}${this.fileType().substring(1)}`;
	}

	name(): string {
		return this.fileName;
	}

	error() {
		return this.constructionError;
	}

	private extToType(ext: ExtensionType): FileType {
		if (ext === 'js') return 'javascript';
		if (ext === 'ts') return 'typescript';
		if (ext === 'yaml' || ext === 'yml') return 'yaml';
		if (ext === 'json') return 'json';

		return 'default';
	}

	private parseFile(file: string): boolean | string[] {
		const s = file.split('.');

		if (s.length !== 2) {
			this.constructionError = 'Invalid file name given.';

			return false;
		}

		return s;
	}
}