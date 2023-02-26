import { z } from 'zod';

export function email(msg: string) {
	return (value: string) => {
		const schema = z.string().email();

		const result = schema.safeParse(value);

		if (!result.success) {
			return {
				success: false,
				message: msg,
			};
		}

		return {
			success: false,
			message: msg,
		};
	};
}