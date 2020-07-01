<template>
  <div class="outers">
    <parent v-if="comment.parent" :comment="comment.parent" />
    <div class="total">
      <div class="user">
        <img v-if="comment.user.head_img" :src="$axios.defaults.baseURL+comment.user.head_img" alt />
        <img c-else src="@/assets/logo.jpg" alt />
        <div class="info">
          <div class="title">{{comment.user.nickname}}</div>
          <div class="time">2小时前</div>
        </div>
        <div class="replace">回复</div>
      </div>
      <p>评论：{{comment.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment"],
  name: "parent"
};
</script>

<style lang="less" scoped>
.outers {
  border-bottom: none;
  .total {
    padding: 2.778vw;
    border: 1px solid #e4e4e4;
  }
  p {
    font-size: 4.444vw;
    color: #333;
    margin: 2.778vw 0vw 2.778vw 11.111vw;
  }
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 9.444vw;
    height: 9.444vw;
    border-radius: 50%;
    margin-right: 2.222vw;
  }
  .info {
    flex: 1;
    .title {
      font-size: 3.889vw;
      color: #333;
    }
    .time {
      font-size: 3.333vw;
      color: #999;
    }
  }
  .replace {
    font-size: 3.889vw;
    color: #999;
  }
}
</style>