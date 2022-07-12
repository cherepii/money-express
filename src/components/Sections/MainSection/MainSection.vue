<template>
	<div class="wrapper">
		<div class="banner">
			<img
				src="https://admin.money-express.kz/uploads/flags/image/02d34b6ae2458c944695c3cf581a197e.png"
				alt="banner"
			/>
		</div>
		<div class="mobile-banner">
			<img
				src="https://admin.money-express.kz/uploads/flags/mobile/c263c26656cf94149fc95f9c9ee505e2.png"
				alt="banner"
			/>
		</div>
		<container-block>
			<div class="text-block">
				<h1>Деньги для Вас здесь и сейчас</h1>
				<h2>
					Онлайн микрокредиты до <span>150 000</span> тенге за
					<span>5</span> минут
				</h2>
				<span>*ГЭСВ от 3,71%</span>
				<div class="text-block__button">Деньги у вас в {{ date }}</div>
			</div>
		</container-block>
	</div>
	<container-block>
		<my-calculator />
	</container-block>
</template>

<script>
import MyCalculator from './MyCalculator.vue';
export default {
	components: { MyCalculator },
	data() {
		const getDate = new Date();
		getDate.setMinutes(getDate.getMinutes() + 15);
		return {
			date: getDate.getHours() + ':' + getDate.getMinutes(),
		};
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.wrapper {
	padding: 144px 0;
	position: relative;

	@media screen and (max-width: $mobile) {
		padding: 120px 0;
	}

	.text-block {
		max-width: 390px;
		width: 100%;
		color: #264476;
		display: flex;
		flex-direction: column;

		@media screen and (max-width: $mobile) {
			max-width: 250px;
			> h1 {
				font-size: 24px !important;
			}

			> h2 {
				font-size: 18px !important;
			}
		}

		> h1 {
			font-size: 48px;
			line-height: 110%;
		}

		> h2 {
			font-size: 30px;
			line-height: 120%;
			margin: 8px 0 16px;

			> span {
				color: red;
			}
		}

		> span {
			font-style: italic;
			font-size: 13px;
			font-weight: 600;
		}

		&__button {
			padding: 10px 24px;
			box-shadow: 0 0 28px -14px #000;
			background: #fff;
			width: max-content;
			margin-top: 10px;
			border-radius: 14px;

			@media screen and (max-width: $mobile) {
				margin-bottom: 20px;
			}
		}
	}
}

.banner {
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	@media screen and (max-width: $mobile) {
		display: none;
	}

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.mobile-banner {
	display: none;
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: $mobile) {
		display: block;
	}
}

.mobile-container {
	max-width: 100% !important;
	width: 100% !important;
	padding: 0 !important;
}
</style>
