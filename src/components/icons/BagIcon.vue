<template>
	<svg
		:width="width"
		:height="height"
		viewBox="0 0 40 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			opacity=".5"
			d="M31.667 10H8.333a5 5 0 00-5 5v4.533l11.395 3.8h10.544l11.395-3.8V15a5 5 0 00-5-5z"
			fill="#EB3568"
		></path>
		<path
			d="M16.667 10V8.333h6.666V10h3.334V8.333A3.337 3.337 0 0023.333 5h-6.666a3.337 3.337 0 00-3.334 3.333V10h3.334zm-1.939 13.333l-11.395-3.8V30a5.005 5.005 0 005 5h23.334a5.005 5.005 0 005-5V19.533l-11.395 3.8H14.728z"
			fill="#EB3568"
		></path>
	</svg>
</template>

<script>
export default {
	name: 'bag-icon',

	props: {
		width: Number,
		height: Number,
	},
};
</script>
