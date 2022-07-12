<template>
	<transition name="menu">
		<!-- in $event i got value from $emit function -->
		<mobile-menu
			:selectedLang="selectedLang"
			@changelang="this.selectedLang = $event"
			v-model="mobileMenuVisible"
			v-if="mobileMenuVisible"
		/>
	</transition>
	<div class="wrapper">
		<header-logo />
		<header-slogan class="mobile-hidden" />
		<header-contacts class="mobile-hidden" />
		<header-offers class="mobile-hidden" />
		<header-button class="mobile-hidden" />
		<select-lang class="mobile-hidden" />
		<header-burger v-model="mobileMenuVisible" />
	</div>
</template>

<script>
import HeaderBurger from './HeaderBurger.vue';
import HeaderButton from './HeaderButton.vue';
import HeaderContacts from './HeaderContacts.vue';
import HeaderLogo from './HeaderLogo.vue';
import HeaderOffers from './HeaderOffers.vue';
import HeaderSlogan from './HeaderSlogan.vue';
import MobileMenu from './MobileMenu.vue';
import SelectLang from './SelectLang';
export default {
	components: {
		HeaderLogo,
		HeaderSlogan,
		HeaderContacts,
		HeaderOffers,
		SelectLang,
		HeaderBurger,
		MobileMenu,
		HeaderButton,
	},

	data() {
		return {
			mobileMenuVisible: false,
			selectedLang: 'ru',
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../scss/animations';
@import '../../scss/_variables';

.wrapper {
	padding: 18px 40px;
	margin: 0 auto;
	max-width: 1360px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #fff;

	@media screen and (max-width: $mobile) {
		padding: 18px 20px;
		box-shadow: 0 0 20px rgb(92 102 113 / 10%);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;
	}
}

.menu-enter-active {
	transition: all 0.3s;
	opacity: 0;
}
.menu-enter-to {
	opacity: 1;
}
.menu-leave-active {
	transition: all 0.4s cubic-bezier(0.7, 0.6, 0.1, 1);
}
.menu-leave-to {
	opacity: 0;
}
</style>
