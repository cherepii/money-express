<template>
	<div class="logo">
		<img src=" https://money-express.kz/icons/logo.svg" alt="Logo" />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../scss/_animations';
.logo {
	width: 88px;
	height: 32px;
	animation: 0.4s transform-top;
	animation-delay: 0.2s;

	> img {
		width: 100%;
		height: 100%;
	}
}
</style>
