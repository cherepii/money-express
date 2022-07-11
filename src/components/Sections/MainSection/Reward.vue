<template>
	<div class="reward">
		<div class="reward__heading">
			<reward-heading :value="interestWithoutDiscount" />
		</div>
		<div class="reward__promo">
			<input @input="handleChange" type="text" :value="modelValue" />
			<my-button
				:disabled="value === ''"
				:customClass="'reward__promo-button'"
				:text="'Применить'"
			/>
		</div>
	</div>
</template>

<script>
import RewardHeading from './RewardHeading.vue';
export default {
	components: { RewardHeading },

	props: {
		modelValue: {
			type: String,
			default: '',
		},
		interestWithoutDiscount: {
			type: String,
			required: true,
		},
	},

	methods: {
		handleChange(e) {
			this.$emit('update:modelValue', e.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.reward {
	padding: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	&__heading {
		display: flex;
		align-items: center;
	}

	&__promo {
		margin-top: 20px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 6px;
		border: 1px dashed rgb(133, 132, 132);

		> input {
			border: none;
			outline: none;
			flex: 1 1;
			background: transparent;
			color: #fff;
			font-size: 20px;
		}

		&-button {
			padding: 12px 24px !important;
			font-size: 14px !important;
		}

		&-input {
			height: 100%;
		}
	}
}
</style>
