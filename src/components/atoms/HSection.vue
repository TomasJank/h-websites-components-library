<template>
	<div :class="getSectionSpaceClass">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		top: Boolean,
		bottom: Boolean
	},
	computed: {
		getSectionSpaceClass() {
			return this.top
				? 'section-spaces--top'
				: this.bottom
				? 'section-spaces--bottom'
				: 'section-spaces';
		}
	}
};
</script>
