<template>
  <div class="back-top">
    <img src="~assets/img/common/totop.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  right: 10px;
  bottom: 55px;
  text-align: center;
}
.back-top img {
  margin-top: 4px;
  width: 25px;
}
</style>