<template>
	<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 15.5a1 1 0 01-.71-.29l-4-4a1.004 1.004 0 111.42-1.42L12 13.1l3.3-3.18a1 1 0 111.38 1.44l-4 3.86a1 1 0 01-.68.28z"
			:fill="fill"
		></path>
	</svg>
</template>

<script>
export default {
	name: 'arrow-icon',
	props: {
		fill: {
			type: String,
			default: '#132333',
		},
	},
};
</script>
