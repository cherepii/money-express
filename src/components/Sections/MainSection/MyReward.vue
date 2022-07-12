<template>
	<div class="reward">
		<div class="reward__heading">
			<reward-heading :value="interestWithoutDiscount" />
		</div>
		<div class="reward__promo">
			<input
				placeholder="Промокод"
				@input="handleChange"
				type="text"
				:value="modelValue"
			/>
			<my-button
				:disabled="modelValue === ''"
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
@import '../../../scss/_variables';
.reward {
	padding: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: $mobile) {
		padding: 0;
		margin-bottom: 24px;
	}

	&__heading {
		display: flex;
		align-items: center;

		@media screen and (max-width: $mobile) {
			display: none;
		}
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
			width: 100%;

			&::placeholder {
				font-size: 14px;
				color: rgb(175, 174, 174);
			}

			@media screen and (max-width: 488px) {
				width: 60%;
			}
		}

		&-button {
			padding: 12px 24px !important;
			font-size: 14px !important;

			@media screen and (max-width: $mobile) {
				width: 40%;
				font-size: 12px !important;
			}
		}

		&-input {
			height: 100%;
		}
	}
}
</style>
