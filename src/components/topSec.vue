<template>
  <div class="topSec">
    <span class="iconfont iconjiantou2"></span>
    <p>{{val}}</p>
  </div>
</template>

<script>
export default {
  props: ["val"]
};
</script>

<style lang="less" scoped>
.topSec {
  display: flex;
  padding: 5.556vw 0vw 0vw 5.556vw;
  p {
    flex: 1;
    text-align: center;
    margin-right: 5.556vw;
    font-weight: bold;
  }
}
</style>