<template>
	<button :disabled="isDisabled" :class="[defaultClass, customClasses]">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'my-button',
	props: {
		customClass: {
			type: String,
		},
		text: {
			type: String,
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			defaultClass: 'my-button',
			customClasses: this.customClass,
		};
	},
};
</script>

<style lang="scss" scoped>
.my-button {
	padding: 18px 52px;
	text-transform: uppercase;
	color: #fff;
	font-weight: 600;
	font-size: 16px;
	background: linear-gradient(30deg, #00c4ff, #ff0266);
	border-radius: 10px;
	transition: opacity 0.2s ease-in;

	&:disabled {
		opacity: 0.5;
		cursor: default;
	}
}
</style>
