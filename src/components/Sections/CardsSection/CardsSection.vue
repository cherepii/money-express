<template>
	<container-block>
		<div class="wrapper">
			<card :list="news" :title="'Акции и новости'" />
			<card :list="reviews" :title="'Отзывы'" />
		</div>
	</container-block>
</template>

<script>
import { newsData } from './card.data';
import { reviewsData } from './card.data';

import Card from './Card.vue';

export default {
	components: { Card },
	data() {
		return {
			news: newsData,
			reviews: reviewsData,
		};
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	padding: 48px 0;
}
</style>
