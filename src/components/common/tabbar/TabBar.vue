<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.3);
}
</style>