<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'container-block',
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables';
.container {
	max-width: 1220px;
	padding: 0 40px;
	width: 100%;
	margin: 0 auto;

	@media screen and (max-width: $mobile) {
		padding: 0 20px;
	}
}
</style>
