<template>
	<div class="default-input">
		<label>{{ label }}</label>
		<input
			@input="handleChange"
			:type="inputType"
			:placeholder="placeholder"
			:value="modelValue"
		/>
	</div>
</template>

<script>
export default {
	name: 'form-input',

	props: {
		inputType: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			required: true,
		},

		modelValue: [String, Number],

		label: String,
	},

	methods: {
		handleChange(e) {
			this.$emit('update:modelValue', e.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.default-input {
	> label {
		font-size: 12px;
		color: #93989d;
		font-weight: 400;
		margin-bottom: 5px;
		display: block;
		text-align: left;
	}

	> input {
		background: #fff;
		border: 1px solid #dee1e5;
		padding: 15px;
		font-size: 14px;
		border-radius: 8px;
		margin-bottom: 16px;
		width: 100%;

		&::placeholder {
			font-size: 14px;
		}
	}
}
</style>
