<template>
	<HText tag="p" meteorite-dark :white="dark">
		<IconCheck success class="mr-4" />
		30-day money-back guarantee
	</HText>
</template>

<script>
export default {
	props: {
		dark: Boolean
	}
};
</script>
