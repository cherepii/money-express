function debounce(fn, ms) {
	let timeout;

	return function () {
		clearTimeout(timeout);

		let args = arguments;
		let that = this;

		timeout = setTimeout(function () {
			fn.apply(that, args);
		}, ms);
	};
}

export default debounce;
