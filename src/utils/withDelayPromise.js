export const withDelayPromise = (delay) => (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, delay);
	})
};