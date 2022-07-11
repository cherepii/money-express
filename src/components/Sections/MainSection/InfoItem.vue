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
.info__item {
	display: flex;
	align-items: center;
	text-align: left;

	&:first-child {
		width: 60%;
	}

	&-text {
		> span {
			color: rgb(177, 177, 177);
			font-size: 14px;
			font-weight: 600;
		}

		> h2 {
			font-size: 22px;
			font-weight: 600;
			color: #fff;
		}
	}
}
</style>
