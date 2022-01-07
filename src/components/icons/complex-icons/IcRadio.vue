<template>
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		@mouseover="hover = true"
		@mouseleave="hover = false"
	>
		<circle
			v-if="hover"
			cx="16"
			cy="16"
			r="16"
			fill="#673DE6"
			fill-opacity="0.1"
		/>
		<template v-if="checked">
			<circle cx="16" cy="16" r="10" fill="#5025D1" />
			<circle cx="15.9991" cy="16.0001" r="4.44444" fill="white" />
		</template>
		<template v-else-if="!checked">
			<circle cx="16" cy="16" r="10" fill="white" />
			<path
				d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM16.0015 23.9999C11.5815 23.9999 8.00149 20.4199 8.00149 15.9999C8.00149 11.5799 11.5815 7.99986 16.0015 7.99986C20.4215 7.99986 24.0015 11.5799 24.0015 15.9999C24.0015 20.4199 20.4215 23.9999 16.0015 23.9999Z"
				fill="#5025D1"
			/>
		</template>
	</svg>
</template>

<script>
export default {
	props: {
		checked: Boolean
	},
	data() {
		return {
			hover: false
		};
	}
};
</script>
