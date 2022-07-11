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
						<money-value :value="moneyValue + ' ₸'" />
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
							:value="moneyValue"
							ref="moneyInput"
						/>
					</div>
				</div>
				<div class="days">
					<div class="days__inputs">
						<input @input="handleDaysInput" :value="daysValue" type="number" />
						<my-input
							:min="1"
							:max="25"
							:value="daysValue"
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
					:text="`Получить ${moneyValue} ₸`"
					:customClass="'getButton'"
					@click="getData"
				/>
			</div>
			<div class="calculator__right">
				<right-info />
				<reward />
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
import Reward from './Reward.vue';
import CalculatorNav from './CalculatorNav.vue';

export default {
	components: { MoneyValue, RightInfo, Reward, CalculatorNav },

	methods: {
		handleInput(e) {
			const value = e.target.value;
			const elem = this.$refs['moneyInput'].$el;

			this.moneyValue = value;
			helper.editInputStyle(value, elem, 150000);
		},

		handleDaysInput(e) {
			const value = e.target.value;
			const elem = this.$refs['daysInput'].$el;

			if (value < 1) this.daysValue = 1;
			else if (value > 25) this.daysValue = 25;
			else this.daysValue = value;

			helper.editInputStyle(value, elem, 25);
		},

		handleLeft() {
			if (this.moneyValue > 5000) {
				const elem = this.$refs['moneyInput'].$el;
				const minusValue = Number(this.moneyValue) - 25000;
				this.moneyValue = minusValue < 5000 ? 5000 : minusValue;
				helper.editInputStyle(this.moneyValue, elem, 150000);
			} else return;
		},

		handleRight() {
			if (this.moneyValue < 150000) {
				const elem = this.$refs['moneyInput'].$el;
				const plusValue = Number(this.moneyValue) + 25000;
				this.moneyValue = plusValue > 150000 ? 150000 : plusValue;
				helper.editInputStyle(this.moneyValue, elem, 150000);
			} else return;
		},

		onSelectType(type) {
			this.group = type;
		},

		async getData() {
			try {
				const res = await instance.get('simulate', {
					params: {
						amount: this.moneyValue,
						term: this.daysValue,
						group: this.group,
					},
				});
				console.log(res.data);
			} catch (error) {
				console.log(error.message);
			}
		},
	},

	data() {
		return {
			moneyValue: 150000,
			daysValue: 25,
			group: 'BASIC',
		};
	},

	computed: {
		computedValues() {
			const { moneyValue, daysValue, group } = this;

			return { moneyValue, daysValue, group };
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
};
</script>

<style lang="scss" scoped>
.calc {
	margin-top: -90px;
	padding-bottom: 50px;

	.calculator {
		display: flex;
		width: 100%;
		border-radius: 0 12px 12px 12px;
		background: #36427b;

		&__left {
			padding: 54px 46px;
			width: 60%;
			border-right: 1px dashed rgb(133, 132, 132);

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
			}
		}

		&__right {
			width: 40%;
		}
	}
}
</style>
