<template>
	<div class="clock">
		<clock-icon />
		<h1>
			Прием заявок круглосуточно, без выходных. <br />
			Рассмотрение и отправка денег без выходных с 9:00 до 18:00.
		</h1>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../scss/_animations';

.clock {
	display: flex;
	align-items: center;
	animation: 0.4s transform-top;
	animation-delay: 0.5s;

	h1 {
		margin-left: 8px;
		font-size: 12px;
		font-weight: 500;
		line-height: 1.4rem;
	}
}
</style>
