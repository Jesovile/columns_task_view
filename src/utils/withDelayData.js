export const withDelayData = (delay) => (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, delay);
	}).then(data => data)
};