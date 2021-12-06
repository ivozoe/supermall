<template>
  <div class="toast" v-show="isShow">
    <div class="toast-content">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    // message: {
    //   type: String,
    //   default: "",
    // },
    // show: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, duration) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  /* border-radius: 10%; */
}
/* .toast-content {
  margin-left: -50%;
  margin-top: -50%;
} */
</style>