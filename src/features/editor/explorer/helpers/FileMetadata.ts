export class FileMetadata {
	private readonly forcedFileType: FileType = 'default';
	private readonly parsedFileType: FileType = '' as FileType;
	private readonly ext: ExtensionType[] = [];
	private originalFile = '';
	private readonly fileName: string = '';

	static create(file: string, fileType: FileType) {
		return new FileMetadata(file, fileType);
	}

	private constructor(original: string, fileType: FileType) {
		const parsed = this.parseFile(original);

		if (!Array.isArray(parsed)) return;

		this.originalFile = original;
		this.forcedFileType = fileType;
		this.fileName = parsed[0];
		if (parsed[1]) {
			this.ext = [parsed[1] as ExtensionType];
		}

		this.parsedFileType = this.extToType(this.ext);
	}

	extension(): ExtensionType[] {
		return this.ext;
	}

	fileType(): FileType {
		if (this.forcedFileType !== this.parsedFileType) {
			return this.parsedFileType;
		}

		return this.forcedFileType;
	}

	derivedOriginal(): string {
		if (this.extension().length === 0 && this.forcedFileType !== 'default') {
			return `${this.originalFile}.${this.typeToExt(this.forcedFileType)}`;
		}

		return this.originalFile;
	}

	upperCaseFileType(): string {
		return `${this.fileType()
			.substring(0, 1)
			.toUpperCase()}${this.fileType().substring(1)}`;
	}

	name(): string {
		return this.fileName;
	}

	validate(): string {
		if (!new RegExp('^[\\w\\-. ]+$').test(this.originalFile)) {
			return 'Invalid file name given. File names can only contain alphanumeric characters and no more than one dot (.) for extension. Please, consult this regex expression: ^[a-zA-Z0-9](?:[a-zA-Z0-9 ._-]*[a-zA-Z0-9])?\\.[a-zA-Z0-9_-]+$';
		}

		const ext = this.typeToExt(this.parsedFileType);

		if (this.forcedFileType !== 'default') {
			if (ext && this.parsedFileType !== this.forcedFileType) {
				return `Invalid extension. Expected .${this.typeToExt(
					this.forcedFileType,
				)} for ${this.upperCaseFileType()}.`;
			}
		}

		return '';
	}

	private extToType(ext: ExtensionType[]): FileType {
		if (ext.includes('js')) return 'javascript';
		if (ext.includes('ts')) return 'typescript';
		if (ext.includes('yaml') || ext.includes('yml')) return 'yaml';
		if (ext.includes('json')) return 'json';

		return 'default';
	}

	private typeToExt(type: FileType): ExtensionType[] | null {
		if (type === 'javascript') return ['js'];
		if (type === 'typescript') return ['ts'];
		if (type === 'yaml') return ['yaml', 'yml'];
		if (type === 'json') return ['json'];

		return null;
	}

	private parseFile(file: string): boolean | string[] {
		return file.split('.');
	}
}
