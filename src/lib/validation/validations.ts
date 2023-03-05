type Fn = (value: string) => { success: boolean; message: string };

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

export function required(msg: string) {
	return (value: string) => {
		return {
			success: !!value,
			message: msg,
		};
	};
}

export function min(m: number, msg: string) {
	return (value: string) => {
		if (value.length < m) {
			return {
				success: false,
				message: msg,
			};
		}

		return {
			success: true,
			message: '',
		};
	};
}

export function max(m: number, msg: string) {
	return (value: string) => {
		if (value.length > m) {
			return {
				success: false,
				message: msg,
			};
		}

		return {
			success: true,
			message: '',
		};
	};
}
