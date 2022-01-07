<template>
	<div class="label" :class="classes">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		top: Boolean,
		gray: Boolean,
		success: Boolean,
		primary: Boolean,
		secondary: Boolean,
		warning: Boolean,
		danger: Boolean,
		light: Boolean,
		dark: Boolean
	},
	computed: {
		classes() {
			return {
				'label--top': this.top,
				'label--md': this.md,
				'label--lg': this.lg,
				'label-success': this.success,
				'label-primary': this.primary,
				'label-secondary': this.secondary,
				'label-info': this.info,
				'label-warning': this.warning,
				'label-danger': this.danger,
				'label-light': this.light,
				'label-dark': this.dark,
				'label-gray': this.gray
			};
		}
	}
};
</script>
