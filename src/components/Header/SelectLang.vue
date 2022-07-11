<template>
	<div class="button-wrapper">
		<button class="button" @click="isModalVisible = !isModalVisible">
			<kz-icon v-if="selectedLang === 'kz'" />
			<ru-icon v-else />
			<span>{{ selectedLang === 'ru' ? 'RU' : 'KZ' }}</span>
			<arrow-icon />
		</button>
		<transition name="modal-animate">
			<div v-if="isModalVisible" class="modal">
				<div class="modal__item" @click="handleLang('ru')">
					<ru-icon />
					<span>Русский</span>
				</div>
				<div class="modal__item" @click="handleLang('kz')">
					<kz-icon />
					<span>Казахский</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedLang: 'ru',
			isModalVisible: false,
		};
	},

	methods: {
		handleLang(value) {
			this.selectedLang = value;
			this.isModalVisible = false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../animations/animations';

.button-wrapper {
	position: relative;

	.button {
		display: flex;
		align-items: center;
		border: 1px solid #dee1e5;
		padding: 10px 12px;
		border-radius: 34px;
		min-width: 92px;
		animation: 0.4s transform-top;
		animation-delay: 0.7s;

		> span {
			margin-left: 8px;
			font-size: 12px;
		}
	}

	.modal {
		width: 160px;
		position: absolute;
		z-index: 5555;
		top: 120%;
		left: 0;
		box-shadow: 0 0 18px #dee1e5;
		border-radius: 18px;

		&__item {
			display: flex;
			align-items: center;
			padding: 12px;
			transition: background 0.2s ease-out;
			background: #fff;
			cursor: pointer;

			&:first-child {
				border-top-right-radius: 18px;
				border-top-left-radius: 18px;
			}
			&:last-child {
				border-bottom-right-radius: 18px;
				border-bottom-left-radius: 18px;
			}

			&:hover {
				background: #f0f1f1;
			}

			> span {
				margin-left: 8px;
				font-size: 12px;
				color: #8d8d8d;
			}
		}
	}

	.modal-animate-enter-active {
		transition: all 0.3s;
		opacity: 0;
	}
	.modal-animate-enter-to {
		opacity: 1;
	}
	.modal-animate-leave-active {
		transition: all 0.4s cubic-bezier(0.7, 0.6, 0.1, 1);
	}
	.modal-animate-leave-to {
		opacity: 0;
		transform: translateX(50px);
	}
}
</style>
