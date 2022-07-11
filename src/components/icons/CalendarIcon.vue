<template>
	<svg
		viewBox="0 0 40 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
	>
		<path
			opacity=".5"
			d="M36.667 16.667H3.333v15a5 5 0 005 5h23.334a5 5 0 005-5v-15zm-25-3.334A1.667 1.667 0 0110 11.667V5a1.667 1.667 0 113.333 0v6.667a1.667 1.667 0 01-1.666 1.666zm16.666 0a1.667 1.667 0 01-1.666-1.666V5A1.667 1.667 0 0130 5v6.667a1.667 1.667 0 01-1.667 1.666z"
			fill="#EB3568"
		></path>
		<path
			d="M31.667 6.667H30v5a1.667 1.667 0 01-3.333 0v-5H13.333v5a1.667 1.667 0 01-3.333 0v-5H8.333a5 5 0 00-5 5v5h33.334v-5a5 5 0 00-5-5z"
			fill="#EB3568"
		></path>
	</svg>
</template>

<script>
export default {
	name: 'calendar-icon',

	props: {
		width: Number,
		height: Number,
	},
};
</script>

<style lang="scss" scoped></style>
