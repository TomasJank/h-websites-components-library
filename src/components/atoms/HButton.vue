<template>
  <component
    :is="getButtonType"
    :id="id"
    :to="to"
    :href="href"
    :target="target"
    :class="getButtonClass"
    @click.native="buttonClick"
    @mousedown.native="buttonMouseDown"
    @mouseover.native="buttonMouseOver"
  >
    <div v-if="$slots.icon" class="mr-4">
      <slot name="icon" />
    </div>
    <slot />
    <IconChevron v-if="dropdown" :up="isOpen" class="ml-4" />
  </component>
</template>

<script>
import ButtonSimple from "@/components/partials/button-templates/ButtonSimple";
import ButtonRouterLink from "@/components/partials/button-templates/ButtonRouterLink";
import ButtonLink from "@/components/partials/button-templates/ButtonLink";

export default {
  components: { ButtonSimple, ButtonRouterLink, ButtonLink },
  props: {
    to: [Object, String],
    href: String,
    target: String,
    id: String,
    primary: Boolean,
    success: Boolean,
    danger: Boolean,
    dark: Boolean,
    white: Boolean,
    bordered: Boolean,
    transparent: Boolean,
    lg: Boolean,
    md: Boolean,
    sm: Boolean,
    inline: Boolean,
    inlineDanger: Boolean,
    inlineDark: Boolean,
    inlineWhite: Boolean,
    dropdown: Boolean,
    isOpen: Boolean,
    link: Boolean,
  },
  computed: {
    getButtonType() {
      return this.to
        ? "button-router-link"
        : this.href
        ? "button-link"
        : "button-simple";
    },
    getButtonClass() {
      return {
        "hb hb--primary": this.primary && !this.$slots.icon,
        "hb hb--success": this.success && !this.$slots.icon,
        "hb hb--danger": this.danger && !this.$slots.icon,
        "hb hb--dark": this.dark && !this.$slots.icon,
        "hb hb--bordered": this.bordered,
        "hb hb--transparent": this.transparent,
        "hb--lg": this.lg,
        "hb--md": this.md,
        "hb--sm": this.sm,
        "hb-inline": this.inline,
        "hb-inline hb-inline--white": this.inlineWhite,
        "hb-inline hb-inline--danger": this.inlineDanger,
        "hb-inline hb-inline--dark": this.inlineDark,
        "hb-link": this.link,
        "hb hb-bordered--dark": this.dark && this.bordered,
        "hb hb-bordered--white": this.white && this.bordered,
        "hb-icon": this.$slots.icon,
        "hb-icon--success": this.success && this.$slots.icon,
        "hb-icon--danger": this.danger && this.$slots.icon,
        "hb-icon--dark": this.dark && this.$slots.icon,
        "hb-icon--white": this.white && this.$slots.icon,
      };
    },
  },
  methods: {
    buttonClick() {
      if (!this.disabled) this.$emit("click");
    },
    buttonMouseDown() {
      if (!this.disabled) this.$emit("mousedown");
    },
    buttonMouseOver() {
      if (!this.disabled) this.$emit("mouseover");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:map";
@use "sass:color";
@use "src/assets/scss/public" as *;

$_button-colors: "success" color-get("success") color-get("success", dark),
  "danger" color-get("danger") color-get("danger", dark),
  "dark" color-get("dark") color-get("primary"),
  "white" color-get("white") color-get("danger"), "transparent" transparent;
$_buttonWidths: map.get($var-button, width);

@mixin generate-button-colors() {
  @each $base, $baseHex, $activeHex in $_button-colors {
    @content ($base, $baseHex, $activeHex);
  }
}

.button-default-props {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  box-sizing: border-box;
  padding: 12px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
}

.hb {
  color: color-get("white");
  width: 100%;
  min-height: 48px;
  background-color: color-get(primary);
  @extend .button-default-props;
  &:hover,
  &:active,
  &:focus {
    background-color: color-get(primary, dark);
    color: color-get("white");
  }
  &:disabled {
    cursor: not-allowed;
    color: color-get("white");
    background-color: color-get("gray");
  }
  &:not(.hb--bordered):not(.hb--transparent):not(.hb-inline):not(.hb-inline--danger) {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  }
  &--bordered {
    color: color-get(primary);
    background: transparent;
    border: 2px solid color-get(primary);
    &:hover,
    &:active,
    &:focus {
      color: color-get(primary);
      border-color: color-get(primary);
      background-color: color.adjust(color-get(primary), $alpha: -0.85);
    }
    &:disabled {
      cursor: not-allowed;
      color: color-get("gray");
      border-color: color-get("gray");
      background: color-get("white");
    }
  }
  &--transparent {
    color: color-get(primary);
    background: transparent;
    border: 2px solid transparent;
    &:hover,
    &:active,
    &:focus {
      color: color-get(primary);
      background-color: color.adjust(color-get(primary), $alpha: -0.85);
    }
    &:disabled {
      cursor: not-allowed;
      color: color-get("gray");
      border-color: color-get("gray");
      background: color-get("white");
    }
  }
}

.hb-inline {
  @extend .button-default-props;
  color: color-get(primary);
  font-weight: 700;
  background: transparent;
  padding: 0;
  &:hover,
  &:active,
  &:focus {
    color: color-get(primary, dark);
    background: transparent;
    outline: none;
    box-shadow: none;
  }
  &--white {
    color: color-get("white");
    &:hover,
    &:active,
    &:focus {
      color: color-get(danger);
    }
  }
  &--danger {
    color: color-get(danger);
    &:hover,
    &:active,
    &:focus {
      color: color-get(danger, dark);
    }
  }
  &--dark {
    color: color-get(dark);
    &:hover,
    &:active,
    &:focus {
      color: color-get(primary);
    }
  }
}
.hb-link {
  font-size: 17px;
  line-height: 140%;
  text-decoration: underline;
  text-underline-offset: 1px;
  color: color-get("meteorite", "dark");
  transition: all ease-in-out 0.3s;
  &:hover,
  &:focus,
  &:active {
    color: color-get("primary");
  }
}
.hb-icon {
  @extend .button-default-props;
  font-weight: 700;
  background: transparent;
  padding: 0;
}

@include generate-button-colors() using ($base, $baseHex, $activeHex) {
  .hb--#{$base}:not(.hb--bordered):not(.hb--transparent) {
    background-color: $baseHex;
    &:active,
    &:hover,
    &:focus {
      background-color: $activeHex;
    }
  }
}
@include generate-button-colors() using ($base, $baseHex, $activeHex) {
  .hb-bordered--#{$base} {
    color: $baseHex;
    border-color: $baseHex;
    &:active,
    &:hover,
    &:focus {
      color: $activeHex;
      border-color: $activeHex;
    }
  }
}
@include generate-button-colors() using ($base, $baseHex, $activeHex) {
  .hb-icon--#{$base} {
    color: $baseHex;
    &:active,
    &:hover,
    &:focus {
      color: $activeHex;
    }
  }
}
@each $name, $widths in $_buttonWidths {
  .hb--#{$name} {
    @each $breakPoint, $width in $widths {
      @include mix-media-breakpoint-up($breakPoint) {
        max-width: #{$width} !important;
      }
    }
  }
}

/* @import '@/assets/scss/components/atoms/_button.scss'; */
</style>
