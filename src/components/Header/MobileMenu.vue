<template>
	<div class="menu-wrapper" @click="handleClose">
		<div class="menu" @click.stop>
			<div class="menu__close">
				<button @click="handleClose">
					<close-icon />
				</button>
			</div>
			<div class="menu__lang">
				<div
					:class="{ active: selectedLang === 'ru' }"
					class="lang__item"
					@click="handleLang('ru')"
				>
					<ru-icon />
					<span>Русский</span>
				</div>
				<div
					:class="{ active: selectedLang === 'kz' }"
					class="lang__item"
					@click="handleLang('kz')"
				>
					<kz-icon />
					<span>Казахский</span>
				</div>
			</div>
			<header-button class="menu__button" />
			<my-navbar class="menu__navbar" />
			<header-contacts :fill="'#000'" :width="24" class="menu__contacts" />
			<header-offers class="menu__offers" />
			<header-slogan class="menu__slogan" />
		</div>
	</div>
</template>

<script>
import MyNavbar from '../Navbar/MyNavbar.vue';
import HeaderButton from './HeaderButton.vue';
import HeaderContacts from './HeaderContacts.vue';
import HeaderOffers from './HeaderOffers.vue';
import HeaderSlogan from './HeaderSlogan.vue';
export default {
	components: {
		HeaderButton,
		MyNavbar,
		HeaderContacts,
		HeaderSlogan,
		HeaderOffers,
	},

	methods: {
		handleClose() {
			this.$emit('update:modelValue', false);
		},

		handleLang(value) {
			this.$emit('changelang', value);
			this.handleClose();
		},
	},

	props: {
		selectedLang: {
			type: String,
			default: 'ru',
		},
	},
};
</script>
<style lang="scss">
.menu-wrapper {
	position: fixed;
	z-index: 555;
	right: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100vh;

	.menu {
		width: 85%;
		background: #fff;
		margin-left: auto;
		padding: 20px 20px 10vh;
		height: 100%;
		border-radius: 16px 0 0 0;
		overflow-y: auto;

		&__close {
			width: 100%;

			> button {
				margin-left: auto;
				display: block;
			}
		}

		&__lang {
			.lang__item {
				margin-bottom: 16px;
				display: flex;
				align-items: center;
				opacity: 0.6;

				> span {
					margin-left: 10px;
					font-size: 12px;
				}
			}

			.active {
				opacity: 1;
			}
		}

		&__button {
			width: max-content;
			padding: 10px 46px;
		}

		&__navbar {
			display: block;
			box-shadow: none;
			margin: 48px 0;

			> li {
				padding: 0;
				margin-bottom: 12px;

				> a {
					font-size: 18px;
				}
			}
		}

		&__contacts {
			align-items: start;

			> .contacts__item {
				margin-bottom: 18px;

				> a {
					font-size: 18px;
					color: inherit;
					font-weight: 600;
				}
			}
		}

		&__offers {
			margin: 8px 0 18px;
		}

		&__slogan {
			> h1 {
				font-weight: 500;
				color: #93989d;
			}
		}
	}
}
</style>
