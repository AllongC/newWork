<template>
  <div class="HomeTop">
    <span class="iconfont iconnew"></span>
    <div class="search">
      <span class="iconfont iconsearch"></span>
      搜索新闻
    </div>
    <span class="iconfont iconwode"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.HomeTop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13.889vw;
  background-color: #ff0000;
  color: #fff;
  padding: 0vw 2.778vw;
  .iconnew {
    font-size: 15vw;
  }
  .iconwode {
    font-size: 8.889vw;
    opacity: 0.5;
  }
  .search {
    margin: 0vw 2.778vw 0vw 2.222vw;
    width: 58.333vw;
    height: 9.444vw;
    line-height: 9.444vw;
    flex: 1;
    text-align: center;
    background-color: #f97979;
    border-radius: 5.278vw;
    .iconsearch {
      font-size: 5vw;
    }
  }
}
</style>