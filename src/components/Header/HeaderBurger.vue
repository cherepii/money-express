<template>
	<button class="burger" @click="handleClick">
		<span class="burger__lines">
			<span class="inner-line"></span>
		</span>
	</button>
</template>

<script>
export default {
	props: {
		modelValue: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClick() {
			this.$emit('update:modelValue', true);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables';
.burger {
	padding: 15px 0 15px;
	display: none;

	@media screen and (max-width: $mobile) {
		display: block;
	}

	&__lines {
		width: 24px;
		height: 14px;
		position: relative;
		display: flex;
		align-items: center;

		.inner-line {
			margin-bottom: 0.5px;
		}

		&::before {
			content: '';
			top: 0;
		}

		&::after {
			content: '';
			bottom: 0;
		}

		&::after,
		&::before,
		.inner-line {
			position: absolute;
			width: 24px;
			height: 2px;
			border-radius: 4px;
			background: #000;
		}
	}
}
</style>
