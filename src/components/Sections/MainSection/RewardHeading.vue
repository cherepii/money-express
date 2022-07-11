<template>
	<success-icon />
	<div class="reward__heading-text">
		<span>Вознаграждение</span>
		<h2>{{ value }}</h2>
	</div>
</template>

<script>
export default {
	props: {
		value: String,
	},
};
</script>

<style lang="scss" scoped>
.reward__heading-text {
	margin-left: 18px;
	> span {
		color: rgb(177, 177, 177);
		font-size: 14px;
		font-weight: 600;
	}

	> h2 {
		font-size: 22px;
		font-weight: 600;
		color: #fff;
	}
}
</style>
