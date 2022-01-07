<template>
  <div class="payment" :class="`payment_${provider}`"></div>
</template>
<script>
export default {
  props: {
    provider: String,
  },
};
</script>
<style lang="scss" scoped>
@use "sass:list" as list;

$_payment-methods: (
  "konbini",
  "luminor",
  "alipay",
  "american-express",
  "baloto",
  "bank-tranfer",
  "banka-karti",
  "banktransferfinland",
  "bcash",
  "bitcoin",
  "boleto",
  "btmalaysia",
  "btsweden",
  "citadele",
  "culturevoucher",
  "custom",
  "danskebank",
  "diners-club",
  "discover-network",
  "dragonpay",
  "efecty",
  "elo",
  "giropay",
  "idealpayments",
  "interkassa",
  "kftc",
  "kredi-karti",
  "liqpay",
  "maestro",
  "mastercard",
  "multibanco",
  "mybank",
  "oxxomexico",
  "paymentwall",
  "paypal",
  "paysera",
  "privat24",
  "przelewy24",
  "qiwi",
  "seb",
  "siauliubankas",
  "sofortbanktransfer",
  "swedbank",
  "todito",
  "trustpay",
  "unionpay",
  "upi_in",
  "visa",
  "wechatpayments",
  "yandexmoney"
);

.payment {
  width: 60px;
  height: 40px;
  /* background-image: url("/images/payment-badges.png"); */
  background-repeat: no-repeat;
  display: block;
}

@mixin generate-badges() {
  $_position: 0;
  @each $method in $_payment-methods {
    $index: list.index($_payment-methods, $method);
    .payment_#{$method} {
      background-position: 0 -#{$_position}px;
    }
    $_position: $_position + 40;
  }
}
@include generate-badges();
</style>
