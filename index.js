'use strict';

module.exports = (input, options) => {
	options = {
		k: 'K',
		m: 'M',
		b: 'B',
		t: 'T',
		space: false,
		...options
	};

	if (input < 1e3) {
		return input;
	}

	if (input >= 1e3 && input < 1e6) {
		return Number((input / 1e3).toFixed(1)) + `${options.space ? ' ' : ''}${options.k}`;
	}

	if (input >= 1e6 && input < 1e9) {
		return Number((input / 1e6).toFixed(1)) + `${options.space ? ' ' : ''}${options.m}`;
	}

	if (input >= 1e9 && input < 1e12) {
		return Number((input / 1e9).toFixed(1)) + `${options.space ? ' ' : ''}${options.b}`;
	}

	if (input >= 1e12) {
		return Number((input / 1e12).toFixed(1)) + `${options.space ? ' ' : ''}${options.t}`;
	}
};
