<template>
	<div class="d-flex justify-content-between">
		<div class="d-flex">
			<IconCheck
				v-if="status != 'danger'"
				:success="status === 'success'"
				:warning="status === 'warning'"
				class="pr-8"
			/>
			<IconX v-else danger class="pr-8" />
			<HText class="feature-text" meteorite-dark>{{ name }}</HText>
		</div>
		<IconQuestion width="16" class="cursor-pointer pl-4"></IconQuestion>
	</div>
</template>
<script>
export default {
	props: { status: String, name: String, tooltip: String }
};
</script>
