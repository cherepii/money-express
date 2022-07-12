<template>
	<div class="calc">
		<calculator-nav @selectType="onSelectType" />
		<div class="calculator">
			<div class="calculator__left">
				<div class="management">
					<div class="management__header">
						<button @click="handleLeft">
							<calculator-arrow />
						</button>
						<money-value :value="amount + ' ₸'" />
						<button @click="handleRight" class="icon-right">
							<calculator-arrow />
						</button>
						<span class="text-left">5000</span>
						<span class="text-right">150000</span>
					</div>
					<div class="management__input">
						<my-input
							@range="handleInput"
							:step="1000"
							:min="5000"
							:max="150000"
							:value="amount"
							ref="moneyInput"
						/>
					</div>
				</div>
				<div class="days">
					<div class="days__inputs">
						<input @input="handleDaysInput" :value="term" type="number" />
						<my-input
							:min="1"
							:max="25"
							:value="term"
							@range="handleDaysInput"
							ref="daysInput"
						/>
					</div>
					<div class="days__text">
						<span>5 дней</span>
						<span>25 дней</span>
					</div>
				</div>
				<my-button
					:text="`Получить ${amount} ₸`"
					:customClass="'getButton'"
					@click="getData"
				/>
			</div>
			<div class="calculator__right">
				<right-info
					:dueDate="computedData.date"
					:principal="computedData.compPrincipal + ' ₸'"
					:term="term + ' дней'"
					:totalReturnAmount="computedData.compTotalReturnAmount + ' ₸'"
				/>
				<my-reward
					:interestWithoutDiscount="computedData.compInterestWithoutDiscount"
					v-model="promoCode"
				/>
			</div>
			<div class="mobile-get-button-block">
				<my-button
					:customClass="'mobile-get-button'"
					:text="`Получить ${amount} ₸`"
					@click="getData"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import instance from '../../../api/api';
import helper from '@/helpers/editInputStyle.js';
import debounce from '@/helpers/debounce';

import MoneyValue from '@/components/Sections/MainSection/MoneyValue';
import RightInfo from './RightInfo.vue';
import MyReward from './MyReward.vue';
import CalculatorNav from './CalculatorNav.vue';

export default {
	components: { MoneyValue, RightInfo, MyReward, CalculatorNav },

	methods: {
		handleInput(e) {
			const value = e.target.value;
			const elem = this.$refs['moneyInput'].$el;

			this.amount = value;
			helper.editInputStyle(value, elem, 150000);
		},

		handleDaysInput(e) {
			const value = e.target.value;
			const elem = this.$refs['daysInput'].$el;

			if (value < 1) this.term = 1;
			else if (value > 25) this.term = 25;
			else this.term = value;

			helper.editInputStyle(value, elem, 25);
		},

		handleLeft() {
			if (this.amount > 5000) {
				const elem = this.$refs['moneyInput'].$el;
				const minusValue = Number(this.amount) - 25000;
				this.amount = minusValue < 5000 ? 5000 : minusValue;
				helper.editInputStyle(this.amount, elem, 150000);
			} else return;
		},

		handleRight() {
			if (this.amount < 150000) {
				const elem = this.$refs['moneyInput'].$el;
				const plusValue = Number(this.amount) + 25000;
				this.amount = plusValue > 150000 ? 150000 : plusValue;
				helper.editInputStyle(this.amount, elem, 150000);
			} else return;
		},

		onSelectType(type) {
			this.group = type;
		},

		async getData() {
			try {
				const res = await instance.get('simulate', {
					params: {
						amount: this.amount,
						term: this.term,
						group: this.group,
						promoCode: this.promoCode ? this.promoCode : null,
					},
				});
				this.data = res.data;
			} catch (error) {
				console.log(error.message);
			}
		},
	},

	data() {
		return {
			amount: 150000,
			term: 25,
			group: 'BASIC',
			promoCode: '',
			data: {
				principal: 150000,
				dueDate: '2022-08-04',
				totalReturnAmount: 187450,
				interestWithoutDiscount: 37450,
			},
		};
	},

	computed: {
		computedValues() {
			const { amount, term, group, promoCode } = this;

			return { amount, term, group, promoCode };
		},

		computedData() {
			const { principal, dueDate, totalReturnAmount, interestWithoutDiscount } =
				this.data;

			const compTotalReturnAmount =
				Math.round(totalReturnAmount).toLocaleString();

			const compPrincipal = principal.toLocaleString();

			const compInterestWithoutDiscount =
				Math.round(interestWithoutDiscount).toLocaleString() + ' ₸';

			const year = dueDate.substr(0, 4);
			const month = dueDate.substr(5, 2);
			const days = dueDate.substr(8);

			const date = days + '-' + month + '-' + year;

			return {
				compTotalReturnAmount,
				compInterestWithoutDiscount,
				compPrincipal,
				date,
			};
		},
	},

	watch: {
		computedValues: {
			handler: debounce(function () {
				this.getData();
			}, 500),
			deep: true,
		},
	},

	mounted() {
		this.getData();
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.calc {
	margin-top: -90px;
	padding-bottom: 50px;

	.calculator {
		display: flex;
		width: 100%;
		border-radius: 0 12px 12px 12px;
		background: #36427b;

		@media screen and (max-width: $mobile) {
			display: block;
		}

		&__left {
			padding: 54px 46px;
			width: 60%;
			border-right: 1px dashed rgb(133, 132, 132);

			@media screen and (max-width: $mobile) {
				border: none;
				width: 100%;
				padding: 12px;
			}

			.management {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 62px;

				&__header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					position: relative;

					> strong {
						font-size: 30px;
						font-weight: 600;
						color: #fff;

						@media screen and (max-width: $mobile) {
							font-size: 24px;
						}
					}

					.icon-right {
						transform: rotate(180deg);
					}

					> span {
						position: absolute;
						bottom: 5px;
						color: rgb(177, 177, 177);
						font-size: 14px;
						font-weight: 600;

						@media screen and (max-width: $mobile) {
							font-size: 12px;
						}

						&.text-left {
							left: 80px;
						}

						&.text-right {
							right: 80px;
						}
					}
				}

				&__input {
					width: 80%;
				}
			}

			.days {
				width: 100%;
				margin-bottom: 32px;

				@media screen and (max-width: $mobile) {
					margin: 0;
				}

				&__inputs {
					> input:first-child {
						width: 100%;
						min-height: 46px;
						background: rgba(255, 255, 255, 15%);
						padding: 16px 16px 28px;
						border: 1px solid rgb(133, 132, 132);
						border-bottom: none;
						outline: none;
						border-radius: 8px;
						color: #fff;
						font-size: 18px;
						font-weight: 700;
						overflow: hidden;

						&:focus {
							border: 1px solid rgb(240, 30, 93);
							border-bottom: none;
						}
					}

					> input:last-child {
						margin: -5px 0 0 0px;
						display: block;
					}
				}

				&__text {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 12px;
					margin-top: 20px;

					> span {
						color: rgb(177, 177, 177);
						font-size: 12px;
						font-weight: 500;
					}
				}
			}

			.getButton {
				min-width: 262px;
				margin: 0 auto;
				display: block;

				@media screen and (max-width: $mobile) {
					display: none;
				}
			}
		}

		&__right {
			width: 40%;

			@media screen and (max-width: $mobile) {
				width: 100%;
				display: flex;
				flex-direction: column-reverse;
				padding: 0 16px 16px;
			}
		}

		.mobile-get-button-block {
			display: none;

			@media screen and (max-width: $mobile) {
				padding-bottom: 24px;
				display: block;

				.mobile-get-button {
					display: block;
					margin: 0 auto;
				}
			}
		}
	}
}
</style>
