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
.container {
	max-width: 1180px;
	width: 100%;
	margin: 0 auto;
}
</style>
