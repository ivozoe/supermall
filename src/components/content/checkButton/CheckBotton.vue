<template>
  <div class="check-botton" :class="{ check: isChecked }">
    <i class="check-icon"></i>
  </div>
</template>

<script>
export default {
  name: "CheckButtom",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-botton {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check {
  background-color: var(--color-high-text);
  border-color: var(--color-high-text);
}
@font-face {
  font-family: "icomoon";
  src: url("~assets/img/common/fonts/icomoon.eot?94j1oo");
  src: url("~assets/img/common/fonts/icomoon.eot?94j1oo#iefix")
      format("embedded-opentype"),
    url("~assets/img/common/fonts/icomoon.ttf?94j1oo") format("truetype"),
    url("~assets/img/common/fonts/icomoon.woff?94j1oo") format("woff"),
    url("~assets/img/common/fonts/icomoon.svg?94j1oo#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.check-icon {
  font-family: "icomoon";
  font-size: 15px;
  font-style: normal;
  color: #fff;
}
</style>