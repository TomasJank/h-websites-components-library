<template>
  <HText tag="span" meteorite-dark class="menu-item d-flex mb-24">
    <IconMenuItem :route="route" class="icon mt-auto mb-auto" />
    <div class="text d-flex flex-column">
      <HText tag="p" class="pl-8 title">{{ title }}</HText>
      <HText tag="p" class="pl-8 description">{{ description }}</HText>
    </div>
  </HText>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@use "src/assets/scss/public" as *;
.menu-item {
  .icon {
    @include mix-media-breakpoint-down(lg) {
      display: none;
    }
  }
  .text {
    align-items: flex-start;
    .title {
      @include mix-font-props(18px, 24px);
    }

    .description {
      @include mix-font-props(14px, 24px);
      @include mix-media-breakpoint-down(lg) {
        color: color-get("gray");
      }
    }
  }
}
</style>
