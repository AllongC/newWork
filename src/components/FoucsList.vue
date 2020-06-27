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
  padding: 0px 14px;
  display: flex;
  height: 110px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .ListInfo {
    flex: 1;
    .bloke {
      margin-top: 6px;
      font-size: 14px;
      color: #888;
    }
    .title {
      font-size: 16px;
      color: #333;
    }
  }
  button {
    width: 70px;
    height: 30px;
    border: none;
    font-size: 12px;
    border-radius: 15px;
    color: #888;
  }
  .redBtn {
    background-color: red;
    color: #ffffff;
  }
}
</style>