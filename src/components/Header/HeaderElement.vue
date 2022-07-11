<template>
	<div class="wrapper">
		<logo />
		<slogan />
		<contacts />
		<offers />

		<a class="wrapper__button" href="#">
			<personal-cabinet-icon />
			<span>Личный кабинет</span>
		</a>

		<select-lang />
	</div>
</template>

<script>
import Contacts from './Contacts.vue';
import Logo from './Logo.vue';
import Offers from './Offers.vue';
import Slogan from './Slogan.vue';
import SelectLang from './SelectLang';
export default {
	components: { Logo, Slogan, Contacts, Offers, SelectLang },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../animations/animations';

.wrapper {
	padding: 25px 146px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__button {
		padding: 8px 16px;
		background: lighten($color: #ff0031, $amount: 47);
		border-radius: 40px;
		display: flex;
		align-items: center;
		transition: background 0.2s ease-in;
		animation: 0.4s transform-top;
		animation-delay: 0.6s;

		&:hover {
			background: lighten($color: #ff0031, $amount: 42);
		}

		> span {
			font-size: 11px;
			color: lighten($color: #ff0031, $amount: 7);
			font-weight: 600;
			letter-spacing: 1px;
			margin-left: 8px;
		}
	}
}
</style>
