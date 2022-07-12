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
@import '../../../scss/_variables';
.card {
	> h1 {
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 28px;

		@media screen and (max-width: $mobile) {
			margin-bottom: 18px;
		}
	}

	&__list {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media screen and (max-width: $mobile) {
			overflow-x: auto;

			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
}
</style>
