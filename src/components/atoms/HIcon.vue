<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :aria-labelledby="iconName || icon"
    role="presentation"
    class="h-icon"
    :class="[iconClass, customClass]"
  >
    <title v-if="title" :id="iconName || icon">
      {{ title }}
    </title>
    <g>
      <component :is="currentIcon" />
    </g>
  </svg>
</template>

<script>
import { kebabToCamel, toTitleCase, getClasses } from "@/utils/helpers";
import * as Icons from "@/components/icons/plain-icons";

export default {
  props: {
    title: String,
    iconName: String,
    icon: {
      type: String,
      required: true,
    },
    viewBox: {
      type: [Number, String],
      default: "0 0 24 24",
    },
    danger: Boolean,
    gray: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    warningDark: Boolean,
    dark: Boolean,
    light: Boolean,
    primary: Boolean,
    headerBg: Boolean,
    customClass: String,
    disabled: Boolean,
  },
  computed: {
    currentIcon() {
      return Icons[kebabToCamel(toTitleCase(this.icon))];
    },
    iconClass() {
      return getClasses("icon", this.$props, "-");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "src/assets/scss/theme/variables" as *;
@use "src/assets/scss/theme/themes" as *;

.h-icon {
  width: 24px;
  height: 24px;
}

@each $color, $value in $theme-colors {
  .icon-#{$color} {
    fill: themed("#{$color}") !important;
  }
}
</style>
