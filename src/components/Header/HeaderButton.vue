<template>
	<a class="wrapper__button" href="#">
		<personal-cabinet-icon />
		<span>Личный кабинет</span>
	</a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper__button {
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
</style>
