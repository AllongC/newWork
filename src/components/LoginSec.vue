<template>
  <div class="LoginSec">
    <button @click="tigger">{{BtnInfo}}</button>
  </div>
</template>

<script>
export default {
  props: ["BtnInfo"],
  methods: {
    tigger() {
      console.log("子组件触发");
      this.$emit("send");
    }
  }
};
</script>

<style lang="less" scoped>
.LoginSec {
  margin-top: 16.667vw;
  padding: 0vw 5.556vw 0vw 5.556vw;
  button {
    width: 100%;
    height: 16.667vw;
    border: none;
    background-color: #d81e06;
    text-align: center;
    color: white;
    font-size: 5vw;
    outline: none;
    border-radius: 8.333vw;
  }
}
</style>