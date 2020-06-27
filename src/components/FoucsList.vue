<template>
  <div class="FocusList">
    <img v-if="dataArr.head_img" :src="$axios.defaults.baseURL + dataArr.head_img" alt />
    <img v-else src="@/assets/logo.jpg" alt />
    <div class="ListInfo">
      <p class="title">{{dataArr.nickname}}</p>
      <p class="bloke">{{dataArr.create_date.split('T')[0]}}</p>
    </div>
    <button v-if="delArr.indexOf(dataArr.id)==-1" @click="focus(dataArr.id)">取消关注</button>
    <button v-else class="redBtn" @click="addFocus(dataArr.id)">关注</button>
  </div>
</template>

<script>
export default {
  props: ["dataArr", "delArr"],
  methods: {
    focus(id) {
      this.$emit("change", id);
    },
    addFocus(id) {
      this.$emit("addFocus", id);
    }
  }
};
</script>

<style lang="less" scoped>
.FocusList {
  padding: 0vw 3.889vw;
  display: flex;
  height: 30.556vw;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  img {
    width: 11.111vw;
    height: 11.111vw;
    border-radius: 50%;
    margin-right: 2.778vw;
  }
  .ListInfo {
    flex: 1;
    .bloke {
      margin-top: 1.667vw;
      font-size: 3.889vw;
      color: #888;
    }
    .title {
      font-size: 4.444vw;
      color: #333;
    }
  }
  button {
    width: 19.444vw;
    height: 8.333vw;
    border: none;
    font-size: 3.333vw;
    border-radius: 4.167vw;
    color: #888;
  }
  .redBtn {
    background-color: red;
    color: #ffffff;
  }
}
</style>