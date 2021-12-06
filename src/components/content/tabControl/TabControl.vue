<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="activeitem(index)"
      :class="{ active: index === currentindex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    activeitem(index) {
      this.currentindex = index;
      this.$emit("tabclick", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>