<template>
  <div class="tile" :class="getClass">
    <div class="icon pb-32">
      <slot name="icon">
        <HIcon icon="ic-quotes" dark />
      </slot>
    </div>
    <div class="content pb-24">
      <HText tag="h4" meteoriteDark class="pb-8"><slot name="title" /></HText>
      <HText tag="span" meteoriteDark>
        <slot name="content" />
      </HText>
    </div>
    <div class="author">
      <HText tag="h4" meteoriteDark><slot name="author" /></HText>
    </div>
  </div>
</template>

<script>
import HText from "@/components/atoms/HText";
import HIcon from "@/components/atoms/HIcon";

export default {
  name: "ContentTitle",
  components: { HText, HIcon },
  computed: {
    getClass() {
      const contentSlot = this.$slots.content;
      const slotText = contentSlot[0].text;
      return slotText.length <= 300 ? "tile-1x2" : "tile-2x2";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "src/assets/scss/theme/themes" as *;

.tile {
  text-align: center;
  padding: 48px 16px;
  border: 1px solid themed("gray-border");
  box-shadow: 0 0 32px 0 #16213e17;
  border-radius: 6px;
}
</style>
