class PasteBuffer {
	private copyBuffer: string[] = [];
	private cutBuffer: string[] = [];
	private readonly maxBuffer = 1000;
	private lastOperation: 'copy' | 'cut' | undefined = undefined;

	addCopy(item: string) {
		this.tryCopyPop();

		if (!this.copyBuffer.includes(item)) {
			this.copyBuffer.push(item);
		}
	}

	addCut(item: string) {
		this.tryCutPop();

		if (!this.cutBuffer.includes(item)) {
			this.cutBuffer.push(item);
		}
	}

	getCopyBuffer() {
		return this.copyBuffer;
	}

	copyLength() {
		return this.copyBuffer.length;
	}

	getCutBuffer() {
		return this.cutBuffer;
	}

	cutLength() {
		return this.cutBuffer.length;
	}

	getLastOperation(): 'cut' | 'copy' | undefined {
		return this.lastOperation;
	}

	private tryCopyPop() {
		if (this.copyBuffer.length > this.maxBuffer) {
			this.copyBuffer.shift();
		}
	}

	private tryCutPop() {
		if (this.cutBuffer.length > this.maxBuffer) {
			this.cutBuffer.shift();
		}
	}
}

export const pasteBuffer = new PasteBuffer();
