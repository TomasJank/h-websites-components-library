<template>
  <div class="d-flex align-items-center mt-8">
    <div class="switch" :class="getClass">
      <input
        :id="id"
        type="checkbox"
        class="checkbox"
        :checked="checked"
        :disabled="disabled"
        @change="updateStatus()"
      />
      <label class="label" :for="id" @change="updateStatus()">
        <span class="switch-inner"></span>
        <span class="switch-outer"></span>
      </label>
    </div>
    <HLabel class="cursor-pointer" @click.native="updateStatus()">{{
      label
    }}</HLabel>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "hswitch",
    },
    big: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: String,
  },
  computed: {
    getClass() {
      return {
        switch__checked: this.checked,
        switch__disabled: this.disabled,
        switch__big: this.big,
      };
    },
  },
  methods: {
    updateStatus() {
      if (!this.disabled) {
        this.$emit("update:checked", !this.checked);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@use "src/assets/scss/public" as *;

.switch {
  position: relative;
  height: fit-content;
  width: 17px;
  margin-right: 11px;
  .checkbox {
    position: absolute;
    opacity: 0;
  }
  .label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border-radius: 20px;
  }
  .switch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  .switch-inner:before,
  .switch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 10px;
    box-sizing: border-box;
  }
  .switch-inner:before {
    content: "";
    padding-left: 10px;
    background-color: color-get("success");
  }
  .switch-inner:after {
    content: "";
    padding-right: 10px;
    background-color: color-get("gray");
  }
  .switch-outer {
    display: block;
    width: 14px;
    height: 14px;
    margin-top: -2px;
    margin-right: -4px;
    background-color: color-get("white");
    position: absolute;
    top: 0;
    bottom: 0;
    right: 11px;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s, box-shadow 0s;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.26);
    &:hover {
      box-shadow: 0px 0px 0px 5px rgba(114, 117, 134, 0.1);
    }
  }

  &__big {
    width: 21px;
    .switch-inner:before,
    .switch-inner:after {
      height: 12px;
    }
    .switch-outer {
      width: 18px;
      height: 18px;
      margin-top: -3px;
      margin-right: -5px;
      right: 13px;
    }
  }

  &__disabled {
    .switch-inner:before {
      background: color-get("success", "light");
    }
    .switch-inner:after {
      background: color-get("gray", "border");
    }
  }

  &__checked {
    .switch-inner {
      margin-left: 0;
    }

    .switch-outer {
      right: 0px;
      &:hover {
        box-shadow: 0px 0px 0px 5px rgba(0, 176, 144, 0.2);
      }
    }
  }
}
</style>
