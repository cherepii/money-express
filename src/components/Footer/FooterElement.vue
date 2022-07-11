<template>
	<div class="footer-wrapper">
		<container-block>
			<div class="footer">
				<div class="footer__rows">
					<div class="footer__col">
						<header-logo />
					</div>
					<div class="footer__col">
						<span class="small-text">Мы в социальных сетях</span>
						<a href="https://www.instagram.com/moneyexpress_kz"
							><svg
								width="24"
								height="24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class=""
							>
								<path
									d="M12 8.876A3.13 3.13 0 008.876 12 3.13 3.13 0 0012 15.124 3.13 3.13 0 0015.124 12 3.13 3.13 0 0012 8.876zM21.37 12c0-1.294.012-2.576-.06-3.867-.073-1.5-.415-2.831-1.512-3.928-1.1-1.1-2.428-1.44-3.928-1.512-1.294-.073-2.576-.061-3.868-.061-1.293 0-2.575-.012-3.867.061-1.5.073-2.831.415-3.928 1.512-1.1 1.099-1.439 2.428-1.512 3.928-.072 1.294-.06 2.576-.06 3.867s-.012 2.576.06 3.867c.073 1.5.415 2.831 1.512 3.928 1.1 1.1 2.428 1.44 3.928 1.512 1.294.073 2.576.061 3.867.061 1.294 0 2.576.012 3.867-.061 1.5-.073 2.832-.415 3.929-1.512 1.099-1.099 1.439-2.428 1.511-3.928.075-1.291.061-2.573.061-3.867zM12 16.807A4.8 4.8 0 017.193 12 4.8 4.8 0 0112 7.193 4.8 4.8 0 0116.807 12 4.8 4.8 0 0112 16.807zm5.004-8.688a1.121 1.121 0 01-1.123-1.123c0-.621.502-1.123 1.123-1.123a1.121 1.121 0 01.43 2.16 1.12 1.12 0 01-.43.086z"
									fill="#132333"
								></path></svg
						></a>
					</div>
					<div class="footer__col">
						<a href="#" class="initial-text">
							<span> О микрокредитах </span>
						</a>
						<a href="#" class="initial-text">
							<span> Как получить деньги? </span>
						</a>
						<a href="#" class="initial-text">
							<span> Как вернуть деньги? </span>
						</a>
						<a href="#" class="initial-text">
							<span> Акции и новости </span>
						</a>
					</div>
					<div class="footer__col">
						<a href="#" class="initial-text">
							<span>Отзывы</span>
						</a>
						<a href="#" class="initial-text">
							<span>О нас</span>
						</a>
						<a href="#" class="initial-text">
							<span>Вопрос-ответ</span>
						</a>
						<a href="#" class="initial-text">
							<span>Контакты</span>
						</a>
					</div>
					<div class="footer__col">
						<a href="#" class="initial-text">
							<span>Документация</span>
						</a>
						<a href="#" class="initial-text">
							<span>Финансовые отчеты</span>
						</a>
						<a href="#" class="initial-text">
							<span>Финансовая грамотность вместе с Fingramota.kz</span>
						</a>
					</div>
					<div class="footer__col">
						<span class="small-text">Телефон</span>
						<header-contacts :className="'footer-contacts__item'" />
						<span class="small-text">E-mail</span>
						<div class="footer-contacts__item" :class="className">
							<email-icon />
							<a href="mailto: info@money-express.kz">info@money-express.kz</a>
						</div>
					</div>
				</div>
			</div>
		</container-block>
	</div>
</template>

<script>
import HeaderContacts from '../Header/HeaderContacts.vue';
import HeaderLogo from '../Header/HeaderLogo.vue';
export default {
	components: {
		HeaderLogo,
		HeaderContacts,
	},
};
</script>

<style lang="scss">
.footer-wrapper {
	background-color: #f7f9fa;
	.footer {
		padding: 100px 0 30px;

		&__rows {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}

		&__col {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			.footer-contacts__item {
				margin-bottom: 20px;
				display: flex;
				align-items: center;

				> svg {
					margin-right: 12px;
				}
				a {
					color: inherit;
					font-size: 12px;
				}
			}

			.small-text {
				font-size: 12px;
				font-weight: 400;
				color: #93989d;
				margin-bottom: 10px;
			}

			.initial-text {
				margin-bottom: 16px;
				position: relative;

				&::after {
					content: '';
					display: block;
					position: absolute;
					right: 0;
					bottom: -3px;
					width: 0;
					height: 1px;
					background: #37474f;
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
					background: #37474f;
					transition: width 0.2s ease-in-out;
				}

				> span {
					font-size: 14px;
					font-weight: 400;
					color: #37474f;
					position: relative;
					display: inline-block;
				}
			}
		}
	}
}
</style>
