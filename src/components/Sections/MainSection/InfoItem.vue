<template>
	<div class="info__item">
		<slot><!-- Here svg icon --></slot>

		<div class="info__item-text">
			<span>{{ subTitle }}</span>
			<h2>{{ title }}</h2>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
			required: true,
		},
		subTitle: {
			type: String,
			default: '',
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.info__item {
	display: flex;
	align-items: center;
	text-align: left;

	@media screen and (max-width: $mobile) {
		display: block;
	}

	&:first-child {
		width: 60%;

		@media screen and (max-width: $mobile) {
			width: 100%;
		}
	}

	&-text {
		@media screen and (max-width: $mobile) {
			display: flex;
			align-items: center;
			justify-content: space-between;

			@media screen and (max-width: $mobile) {
				margin-bottom: 10px;
			}
		}
		> span {
			color: rgb(177, 177, 177);
			font-size: 14px;
			font-weight: 600;

			@media screen and (max-width: $mobile) {
				color: #fff;
			}
		}

		> h2 {
			font-size: 22px;
			font-weight: 600;
			color: #fff;

			@media screen and (max-width: $mobile) {
				font-size: 14px;
			}
		}
	}
}
</style>
