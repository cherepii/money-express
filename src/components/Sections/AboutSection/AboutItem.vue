<template>
	<div class="list__item">
		<img :src="imagePath" alt="image" />
		<h2>{{ title }}</h2>
		<p>{{ description }}</p>
	</div>
</template>

<script>
export default {
	props: {
		imagePath: {
			type: String,
			default:
				'https://admin.money-express.kz/uploads/Image/prozrachnostь_i_chestnostь.svg',
		},
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.list__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 33.33%;
	text-align: center;
	padding: 24px 24px 0;

	@media screen and (max-width: $mobile) {
		width: 50%;
	}

	@media screen and (max-width: $mobile) {
		width: 100%;
		margin-bottom: 14px;
	}
	> img {
		height: 185px;
	}

	> h2 {
		font-size: 20px;
		font-weight: 600;
		padding: 24px 0;
	}

	> p {
		font-size: 0.875em;
		font-weight: 400;
	}

	&:first-child {
		> h2 {
			padding-bottom: 54px;
		}
	}

	&:nth-child(3) {
		> h2 {
			padding-bottom: 54px;
		}
	}

	&:nth-child(4) {
		> h2 {
			padding-bottom: 50px;
		}
	}

	&:last-child {
		> h2 {
			padding-bottom: 20px;
		}
	}
}
</style>
