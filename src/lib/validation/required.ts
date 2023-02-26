export function required(msg: string) {
	return (value: string) => {
		return {
			success: !!value,
			message: msg,
		};
	};
}