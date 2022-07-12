<template>
	<header-element />
	<my-navbar class="mobile-hidden" />
	<main-section />
	<about-section />
	<cards-section />
	<form-section />
	<footer-element />
</template>

<script>
import HeaderElement from '@/components/Header/HeaderElement';
import MyNavbar from '@/components/Navbar/MyNavbar';
import MainSection from '@/components/Sections/MainSection/MainSection';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import CardsSection from './components/Sections/CardsSection/CardsSection.vue';
import FormSection from './components/Sections/FormSection/FormSection.vue';
import FooterElement from './components/Footer/FooterElement.vue';

export default {
	components: {
		HeaderElement,
		MyNavbar,
		MainSection,
		AboutSection,
		CardsSection,
		FormSection,
		FooterElement,
	},
	name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
@import './scss/_variables';

body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100vh;
	font-family: 'Poppins', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #37474f;
	box-sizing: border-box;
}

#app {
	overflow: hidden;
}

.mobile-hidden {
	@media screen and (max-width: $mobile) {
		display: none !important;
	}
}

*,
::after,
::before {
	box-sizing: inherit;
}

a {
	text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
p {
	margin: 0;
	padding: 0;
	display: block;
}

ul,
ol {
	display: block;
	margin: 0;
	padding: 0;
}

li {
	list-style-type: none;
}

input {
	border: none;
	outline: none;
}

button {
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	margin: 0;
	padding: 0;

	:active,
	:focus {
		border: none;
		outline: none;
	}
}
</style>
