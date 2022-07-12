<template>
	<ul class="wrapper">
		<li v-for="(link, idx) in links" :key="link.name">
			<a :href="link.link" :style="{ animationDelay: idx / 10 + 0.1 + 's' }">{{
				link.name
			}}</a>
		</li>
	</ul>
</template>

<script>
import { Links } from './navbar.data';
export default {
	data() {
		return {
			links: Links,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/_animations';

.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 20px rgb(92 102 113 / 10%);

	li {
		padding: 24px;
		a {
			font-size: 14px;
			color: rgb(133, 132, 132);
			font-weight: 500;
			position: relative;
			animation: transform-top 0.4s ease-in;
			display: block;

			&::after {
				content: '';
				display: block;
				position: absolute;
				right: 0;
				bottom: -3px;
				width: 0;
				height: 1px;
				background: #ff0031;
				transition: width 0.2s ease-in-out;
			}

			&:hover::after {
				content: '';
				display: block;
				position: absolute;
				left: 0;
				bottom: -3px;
				height: 1px;
				width: 100%;
				background: #ff0031;
				transition: width 0.2s ease-in-out;
			}
		}
	}
}
</style>
