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