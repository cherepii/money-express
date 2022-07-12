<template>
	<div class="list__item" v-if="item.isNews">
		<img :src="item.posterPath" alt="poster" />
		<span>{{ item.date }}</span>
		<h1>{{ item.title }}</h1>
	</div>
	<div class="list__reviews-item" v-else>
		<div class="person">
			<img src="https://money-express.kz/icons/logo-small.svg" alt="logo" />
			<div>
				<h1>{{ item.name }}</h1>
				<span>{{ item.location }}</span>
			</div>
		</div>
		<p>
			{{ item.text }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.list__item {
	padding: 10px;
	border: 1px solid #dee1e5;
	border-radius: 8px;
	max-width: 277px;
	width: 100%;
	margin-bottom: 180px;
	cursor: pointer;

	@media screen and (max-width: $mobile) {
		min-width: 277px;
		margin-right: 24px;
		margin-bottom: 80px;
	}

	> img {
		width: 100%;
		height: 150px;
		border-radius: 8px;
	}

	> span {
		margin: 10px 0;
		display: block;
		padding-left: 10px;
		color: rgb(177, 177, 177);
		font-size: 12px;
		font-weight: 500;
	}

	> h1 {
		padding: 0 10px;
		font-size: 16px;
		font-weight: 600;
	}
}

.list__reviews-item {
	padding: 40px 40px 20px;
	border-radius: 8px;
	max-width: 30%;
	width: 100%;
	box-shadow: 0 4px 20px rgba(92, 102, 113, 10%);
	min-height: 270px;
	cursor: pointer;

	@media screen and (max-width: $mobile) {
		min-width: 320px;
		margin-right: 24px;
	}

	.person {
		display: flex;
		align-items: center;

		> img {
			margin-right: 20px;
			width: 40px;
			height: 40px;
		}

		> div {
			> h1 {
				font-size: 20px;
				font-weight: 500;
			}

			> span {
				display: block;
				color: rgb(177, 177, 177);
				font-size: 15px;
				font-weight: 500;
			}
		}
	}

	> p {
		font-size: 16px;
		font-weight: 400;
	}
}
</style>
