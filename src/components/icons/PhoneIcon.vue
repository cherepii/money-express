<template>
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
	>
		<path
			d="M15.248 16.11l1.68-1.68a1.642 1.642 0 011.755-.36l2.047.817a1.635 1.635 0 011.02 1.5v3.75a1.628 1.628 0 01-1.71 1.613C5.692 20.858 2.797 8.707 2.25 4.058A1.627 1.627 0 013.877 2.25H7.5A1.62 1.62 0 019 3.27l.817 2.047a1.62 1.62 0 01-.352 1.755l-1.68 1.68s.967 6.548 7.463 7.358z"
			:fill="fill"
		></path>
	</svg>
</template>

<script>
export default {
	name: 'phone-icon',

	props: {
		fill: {
			type: String,
			default: '#2a3f70',
		},
		width: {
			type: Number,
			default: 23,
		},
	},
};
</script>
