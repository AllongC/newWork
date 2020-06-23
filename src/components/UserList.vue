<template>
  <div class="UserList" @click="Skip">
    <p class="MyFocus">{{MyFocus}}</p>
    <p class="FocusUser">{{FocusInfo}}</p>
    <p class="FocusFont">
      <span class="iconfont iconjiantou1"></span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["MyFocus", "FocusInfo"],
  methods: {
    Skip() {
      console.log("子组件触发...");
      this.$emit("ToDirection");
    }
  }
};
</script>

<style lang="less" scoped>
.UserList {
  height: 16.667vw;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  padding-right: 3.889vw;
  margin-left: 5.556vw;
  .MyFocus {
    font-size: 4.444vw;
  }
  .FocusUser {
    flex: 1;
    margin-right: 2.222vw;
    text-align: right;
    font-size: 3.889vw;
    color: #c3c3c3;
  }
  .FocusFont {
    .iconjiantou1 {
      color: #c3c3c3;
    }
  }
}
</style>