<template>
	<div class="calculator-nav">
		<div
			class="nav__item"
			:class="{ active: type === 'BASIC' }"
			@click="handleClick('BASIC')"
		>
			Первый
		</div>
		<div
			class="nav__item"
			:class="{ active: type === 'REGULAR' }"
			@click="handleClick('REGULAR')"
		>
			Повторный
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			type: 'BASIC',
		};
	},

	methods: {
		handleClick(type) {
			this.type = type;
			this.$emit('selectType', type);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.calculator-nav {
	display: flex;
	align-items: center;

	.nav__item {
		padding: 16px 48px;
		border-radius: 12px 12px 0 0;
		background: #36427b;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
		position: relative;
		transition: all 0.25s ease-in;

		@media screen and (max-width: $mobile) {
			padding: 14px 36px;
			font-size: 14px;
		}

		&::after {
			content: '';
			position: absolute;
			background: rgb(240, 30, 93);
			bottom: 0;
			left: 0;
			height: 2px;
			width: 100%;
			transform: rotateY(90deg);
			transition: all 0.25s ease-in;
		}

		&:first-child {
			margin-right: 6px;
		}

		&.active {
			color: rgb(240, 30, 93);

			&::after {
				transform: rotate(0);
			}
		}
	}
}
</style>
