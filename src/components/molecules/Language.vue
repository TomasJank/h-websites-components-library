<template>
  <HText tag="span" meteorite-dark class="d-flex mb-24">
    <IconFlag :country-code="countryCode" class="mt-auto mb-auto" />
    <HText tag="p" class="pl-8 country-name">{{ countryName }}</HText>
    <HText tag="p" class="pl-8 language-name">{{ lang }}</HText>
  </HText>
</template>

<script>
export default {
  name: "language",
  props: {
    countryCode: {
      type: String,
      default: "com",
    },
    lang: {
      type: String,
      default: "English",
    },
    countryName: {
      type: String,
      default: "United States",
    },
  },
};
</script>
<style lang="scss" scoped>
@use "src/assets/scss/public" as *;

.country-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: color-get("meteorite", "dark");
}

.language-name {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: color-get("gray", "manatee");
}
</style>
