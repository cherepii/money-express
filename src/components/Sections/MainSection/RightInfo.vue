<template>
	<div class="info">
		<info-item :title="principal" :subTitle="'Вы берете'">
			<div class="info__icon">
				<bag-icon :width="42" :height="42" />
			</div>
		</info-item>
		<info-item :title="totalReturnAmount" :subTitle="'Сумма к возврату'" />
	</div>
	<div class="info">
		<info-item :title="dueDate" :subTitle="'Дата возврата'">
			<div class="info__icon">
				<calendar-icon :width="42" :height="42" />
			</div>
		</info-item>
		<info-item :title="term" :subTitle="'На срок'" />
	</div>
</template>

<script>
import InfoItem from './InfoItem.vue';

export default {
	components: {
		InfoItem,
	},

	props: {
		principal: {
			type: String,
			required: true,
		},
		totalReturnAmount: {
			type: String,
			required: true,
		},
		dueDate: {
			type: String,
			required: true,
		},
		term: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.info {
	padding: 24px;
	display: flex;
	width: 100%;

	&__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16px;
	}

	&:nth-child(2) {
		border-bottom: 1px dashed rgb(133, 132, 132);
	}
}
</style>
