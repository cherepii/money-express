<template>
	<container-block>
		<div class="wrapper">
			<div class="form">
				<form>
					<div class="form__text">
						<h3>
							Хотите получать специально подобранные для Вас предложения, быть в
							курсе новостей и участвовать в акциях?
						</h3>
						<h5>Тогда заполняйте форму и будьте в команде Money-Express!</h5>
					</div>
					<div class="form__body">
						<form-input
							:label="'Ваше имя'"
							:placeholder="'Введите имя'"
							v-model="name"
						/>
						<form-input
							v-model="phone"
							:label="'Телефон'"
							:placeholder="'+7(***) *** ** **'"
							:inputType="'text'"
							v-maska="'+7 (###) ### ## ##'"
						/>
						<my-checkbox v-model="checkboxValue">
							<span class="form__body-checkbox">
								Я согласен (-а) на обработку
								<a
									href="https://admin.money-express.kz/uploads/Documents/politika_too_personalЬnye_dannye_ME_2022.pdf"
									target="blank"
								>
									персональных данных
								</a>
							</span>
						</my-checkbox>
						<my-button
							:text="'Подписаться'"
							:customClass="'form__button'"
							:isDisabled="!checkboxValue || name == '' || phone == ''"
						/>
					</div>
				</form>
			</div>
		</div>
	</container-block>
</template>

<script>
import FormInput from '@/components/ui/FormInput.vue';
import MyButton from '@/components/ui/MyButton.vue';
export default {
	components: { FormInput, MyButton },

	data() {
		return {
			name: '',
			phone: '',
			checkboxValue: false,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables';
.wrapper {
	margin: 140px 0 50px;

	@media screen and (max-width: $mobile) {
		margin: 60px 0 60px;
	}

	.form {
		width: 100%;
		padding: 52px 0;
		background: #f7f9fa;
		border-radius: 20px;
		position: relative;
		overflow: hidden;

		@media screen and (max-width: $mobile) {
			padding: 32px 16px;
		}

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: -80px;
			left: -80px;
			width: 250px;
			height: 250px;
			border-radius: 50%;
			background: #f3db68;
		}

		&::after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			right: 0;
			transform: translate(35%, 35%);
			width: 450px;
			height: 450px;
			border-radius: 50%;
			background: #d873a2;
		}

		> form {
			max-width: 576px;
			width: 100%;
			margin: 0 auto;
			text-align: center;

			@media screen and (max-width: $mobile) {
				max-width: 100%;
			}

			.form__text {
				position: relative;
				> h3 {
					font-size: 22px;
					font-weight: 600;
				}

				> h5 {
					font-size: 0.875em;
					font-weight: 500;
					margin: 24px 0 40px;
				}
			}

			.form__body {
				padding: 0 70px;
				position: relative;
				z-index: 5;

				@media screen and (max-width: $mobile) {
					padding: 0;
				}

				&-checkbox {
					font-size: 14px;
					font-weight: 400;

					> a {
						text-decoration: underline;
						color: #264476;
						text-underline-offset: 2px;
					}
				}
			}
		}

		&__button {
			width: 100%;
			margin-top: 40px;

			&:disabled {
				opacity: 1;
				background: rgb(185, 181, 181);
			}
		}
	}
}
</style>
