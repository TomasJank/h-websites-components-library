<template>
	<div class="masonry-layout container" :class="getSectionSpaceClass">
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
<style lang="scss">
@use "src/assets/scss/public" as *;
.masonry-layout {
  column-count: 2;
  grid-auto-flow: row dense;
  grid-gap: 10px;
  @include mix-media-breakpoint-up(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  & > * {
    height: -webkit-fill-available;
    display: inline-block;
    margin-bottom: 10px;

    @include mix-media-breakpoint-up(lg) {
      height: auto;
      &.tile-2x2 {
        grid-column: span 2;
        grid-row: span 2;
      }

      &.tile-1x2 {
        grid-column: span 1;
        grid-row: span 2;
      }
    }
  }
}</style>
