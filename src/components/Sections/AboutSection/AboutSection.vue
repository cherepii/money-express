<template>
	<div class="about">
		<h1>Почему микрокредиты Money-Express выгоднее?</h1>

		<div class="about__list">
			<about-item
				v-for="item in list"
				:key="item.imagePath"
				:title="item.title"
				:imagePath="item.imagePath"
				:description="item.description"
			/>
		</div>
	</div>
</template>

<script>
import AboutItem from './AboutItem.vue';
import aboutList from './about.data';

export default {
	components: { AboutItem },

	data() {
		return {
			list: aboutList,
		};
	},
};
</script>

<style lang="scss" scoped>
.about {
	background-color: #f7f9fa;
	border-radius: 24px;
	max-width: 1400px;
	width: 100%;
	margin: 40px auto;
	padding: 60px 80px 30px;

	> h1 {
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 24px;
	}

	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>
