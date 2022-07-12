<template>
	<div class="contacts">
		<div class="contacts__item" :class="className">
			<phone-icon />
			<a href="tel: +77777777777">+7(777) 777-77-77</a>
		</div>
		<div class="contacts__item" :class="className">
			<chat-icon />
			<a href="tel: +78888888888">+7(777) 777-77-77</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		className: {
			type: String,
			default: '',
		},
	},

	mounted() {
		console.log(process.env.VUE_APP_NODE_ENV);
	},
};
</script>

<style lang="scss">
@import '../../animations/_animations';
.contacts {
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: 0.4s transform-top;
	animation-delay: 0.4s;

	.contacts__item {
		display: flex;
		align-items: center;

		&:first-child {
			margin-bottom: 8px;
		}

		> svg {
			margin-right: 12px;
		}
		a {
			color: inherit;
			font-size: 12px;
		}
	}
}
</style>
