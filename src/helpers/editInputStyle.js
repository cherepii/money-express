const myLib = {
	editInputStyle(value, elem, max) {
		elem.style.background = `-webkit-linear-gradient(left, rgb(240, 30, 93) 0%, rgb(240, 30, 93) ${
			(value * 100) / max - 1
		}%, rgb(133, 132, 132) 0%, rgb(133, 132, 132) 100%)`;
	},
};

export default myLib;
