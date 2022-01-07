<template>
  <input
    :type="password && !show ? 'password' : 'text'"
    :disabled="disabled"
    :placeholder="placeholder"
    @blur="hide"
  />
</template>
<script>
export default {
  props: {
    placeholder: String,
    label: String,
    help: String,
    error: String,
    password: Boolean,
    show: Boolean,
    disabled: Boolean,
  },
  methods: {
    hide() {
      debugger;
      this.$emit("update:show", false);
    },
  },
};
</script>
