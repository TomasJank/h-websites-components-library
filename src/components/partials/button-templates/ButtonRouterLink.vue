<template>
	<nuxt-link :to="to">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		to: {
			type: [Object, String],
		}
	}
};
</script>
