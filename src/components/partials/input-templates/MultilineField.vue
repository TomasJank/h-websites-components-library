<template>
  <textarea :disabled="disabled" class="textarea" :placeholder="placeholder" />
</template>
<script>
export default {
  props: {
    placeholder: String,
    label: String,
    help: String,
    error: String,
    disabled: Boolean,
  },
};
</script>
