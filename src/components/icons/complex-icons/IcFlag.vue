<template>
  <div class="flag" :class="`flag_${countryCode}`"></div>
</template>
<script>
export default {
  props: {
    countryCode: String,
  },
};
</script>
<style lang="scss" scoped>
@use "sass:list" as list;

$_language-codes: (
  "com-ar",
  "au",
  "com-br",
  "cz",
  "ca",
  "com-hk",
  "co",
  "dk",
  "de",
  "ee",
  "eu",
  "fr",
  "gr",
  "hk",
  "hr",
  "in",
  "co-id",
  "co-il",
  "it",
  "jp",
  "lv",
  "lt",
  "hu",
  "my",
  "mx",
  "nl",
  "nz",
  "no",
  "ph",
  "pl",
  "pt",
  "ro",
  "ru",
  "sg",
  "sk",
  "kr",
  "es",
  "fi",
  "se",
  "sw",
  "in-th",
  "web-tr",
  "com-ua",
  "ae",
  "co-uk",
  "com",
  "vn"
);

.flag {
  width: 32px;
  height: 20px;
  background-image: url("/images/flags.png");
  background-repeat: no-repeat;
  display: block;
}

@mixin generate-flags() {
  $_position: 0;
  @each $code in $_language-codes {
    $index: list.index($_language-codes, $code);
    .flag_#{$code} {
      background-position: 0 -#{$_position}px;
    }
    $_position: $_position + 20;
  }
}
@include generate-flags();
</style>
