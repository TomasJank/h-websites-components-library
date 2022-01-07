<template>
	<div class="grid" :class="{ 'section-spaces': sectionSpaces }">
		<div class="grid__inner h-100 container">
			<template v-if="twoColumn">
				<div
					v-for="(cell, i) in ['left', 'right']"
					:key="cell"
					:class="
						reversed &&
						`grid__cell--order-${
							i === 1 ? '1' : '2'
						}-xs grid__cell--order-${reverseOrder(i)}-xl`
					"
					class="grid__cell grid__cell--span-4-lg grid__cell--span-6-xl grid__cell--align-middle text-center text-left-lg"
				>
					<slot :name="cell" />
				</div>
			</template>
			<div
				v-else
				class="grid__cell grid__cell--center grid__cell--align-middle d-flex flex-column justify-content-center align-items-center"
			>
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		sectionSpaces: Boolean,
		twoColumn: Boolean,
		reversed: Boolean
	},
	methods: {
		setCellSpanName(span) {
			if (this.cellSpan.length === 2) {
				switch (span) {
					case 0:
						span = 'left';
						break;
					case 1:
						span = 'right';
						break;
				}
			}
			return span;
		},
		reverseOrder(i) {
			const index = i + 1;
			return index === 2 ? 1 : 2;
		}
	}
};
</script>
