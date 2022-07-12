<template>
	<container-block>
		<div class="wrapper">
			<card-list :list="news" :title="'Акции и новости'" />
			<card-list :list="reviews" :title="'Отзывы'" />
		</div>
	</container-block>
</template>

<script>
import { newsData } from './card.data';
import { reviewsData } from './card.data';

import CardList from './CardList.vue';

export default {
	components: { CardList },
	data() {
		return {
			news: newsData,
			reviews: reviewsData,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.wrapper {
	padding: 48px 0;

	@media screen and (max-width: $mobile) {
		padding: 24px 0;
	}
}
</style>
