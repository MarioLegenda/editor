function extract(token: string, value: string) {
	const extracted = value.match(new RegExp(`${token}`));

	if (extracted && extracted[1] && typeof extracted[1] === 'string') {
		return extracted[1];
	}

	return null;
}

export function getHashUrlValues(path: string) {
	const s = path.split('#');

	if (s.length === 2 && typeof s[1] === 'string') {
		const accessToken = extract('access_token', s[1]);
		if (!accessToken) {
			throw new Error('access_token could not be extracted.');
		}

		const refreshToken = extract('refresh_token', s[1]);
		if (!refreshToken) {
			throw new Error('refresh_token could not be extracted.');
		}

		return {
			accessToken: accessToken,
			refreshToken: refreshToken,
		};
	}

	throw new Error('Nothing could be extracted');
}