<template>
	<HGrid class="text-center">
		<HText
			tag="h1"
			meteorite-dark
			:white="dark"
			class="mb-16 mb-24-lg mb-32-xl"
		>
			{{ heading }}
		</HText>
		<HText
			tag="p"
			meteorite-dark
			:white="dark"
			class="mb-16 mb-32-lg mb-40-xl"
		>
			{{ subheading }}
		</HText>
		<HButton
			:to="to"
			:href="href"
			class="mb-16 mb-24-lg"
			md
			primary
			:danger="dark"
		>
			{{ button }}
		</HButton>
		<MoneyBackGuarantee :dark="dark" />
	</HGrid>
</template>

<script>
export default {
	props: {
		heading: String,
		subheading: String,
		button: String,
		href: String,
		to: [Object, String],
		dark: Boolean
	}
};
</script>
