<template>
  <div class="outer">
    <div class="user">
      <img v-if="comment.user.head_img" :src="$axios.defaults.baseURL+comment.user.head_img" alt />
      <img v-else src="@/assets/logo.jpg" alt />
      <div class="info">
        <div class="title">{{comment.user.nickname}}</div>
        <div class="time">2小时前</div>
      </div>
      <div class="replace" @click="replace">回复</div>
    </div>
    <parent v-if="comment.parent" :comment="comment.parent" @ParentId="getParentId" />
    <p>评论：{{comment.content}}</p>
  </div>
</template>

<script>
import parent from "@/views/comment/parent";
export default {
  props: ["comment"],
  components: {
    parent
  },
  methods: {
    replace() {
      this.$emit("replace", {
        parent_id: this.comment.id,
        user: this.comment.user.nickname
      });
    },
    getParentId(contentInfo) {
      this.$emit("replace", contentInfo);
    }
  }
};
</script>

<style lang="less" scoped>
.outer {
  padding: 5.556vw 2.778vw;
  border-bottom: 1px solid #e4e4e4;
  p {
    font-size: 4.444vw;
    color: #333;
    margin: 2.778vw 0vw 2.778vw 5.556vw;
  }
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.778vw;
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