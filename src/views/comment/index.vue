<template>
  <div class="outer">
    <div class="user">
      <img src="@/assets/logo.jpg" alt />
      <div class="info">
        <div class="title">火星网页1</div>
        <div class="time">2小时前</div>
      </div>
      <div class="replace">回复</div>
    </div>
    <parent v-if="comment.parent" :comment="comment.parent" />
    <p>评论：{{comment.content}}</p>
  </div>
</template>

<script>
import parent from "@/views/comment/parent";
export default {
  props: ["comment"],
  components: {
    parent
  }
};
</script>

<style lang="less" scoped>
.outer {
  padding: 10px;
  border-bottom: 1px solid #e4e4e4;
  p {
    font-size: 16px;
    color: #333;
    margin: 10px 0px 10px 20px;
  }
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .info {
    flex: 1;
    .title {
      font-size: 14px;
      color: #333;
    }
    .time {
      font-size: 12px;
      color: #999;
    }
  }
  .replace {
    font-size: 14px;
    color: #999;
  }
}
</style>