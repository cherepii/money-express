<template>
	<div class="checkbox">
		<input @change="handleChange" type="checkbox" :checked="modelValue" />
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'my-checkbox',

	props: {
		modelValue: Boolean,
	},

	methods: {
		handleChange(e) {
			this.$emit('update:modelValue', e.target.checked);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables';

.checkbox {
	display: flex;
	align-items: center;

	@media screen and (max-width: $mobile) {
		align-items: initial;
	}

	> input {
		margin-right: 10px;
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
}
</style>
