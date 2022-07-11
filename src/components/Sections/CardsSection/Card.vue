<template>
	<div class="card">
		<h1>{{ title }}</h1>
		<div class="card__list">
			<card-item v-for="(item, idx) in list" :key="idx" :item="item" />
		</div>
	</div>
</template>

<script>
import CardItem from './CardItem.vue';
export default {
	components: { CardItem },
	props: {
		title: {
			type: String,
			required: true,
		},
		list: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	> h1 {
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 28px;
	}

	&__list {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
