<template>
	<input
		@input="handleChange"
		:value="value"
		type="range"
		:min="min"
		:max="max"
		:step="step"
	/>
</template>

<script>
export default {
	name: 'my-input',
	props: {
		value: {
			default: '5000₸',
		},
		step: {
			type: Number,
			default: 1,
		},

		min: {
			type: Number,
			default: 1,
		},

		max: {
			type: Number,
			default: 100,
		},
	},
	methods: {
		handleChange(e) {
			this.$emit('range', e);
		},
	},
};
</script>

<style lang="scss" scoped>
input {
	-webkit-appearance: none;
	height: 4px;
	background: -webkit-linear-gradient(
		left,
		rgb(240, 30, 93) 0%,
		rgb(240, 30, 93) 99%,
		rgb(133, 132, 132) 0%,
		rgb(133, 132, 132) 100%
	);
	width: 100%;
	border-radius: 5px;
	border: none;
	outline: none;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid #fff;
		background: rgb(240, 30, 30);
		cursor: pointer;
	}
}
</style>
