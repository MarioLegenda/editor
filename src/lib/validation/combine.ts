type Fn = (value: string) => {success: boolean, message: string};

export function combine(fns: Fn[], value: string) {
	const messages = [];
	for (const fn of fns) {
		const valid = fn(value);

		if (!valid.success) {
			messages.push(valid.message);
		}
	}

	if (messages.length !== 0) {
		return messages;
	}

	return null;
}