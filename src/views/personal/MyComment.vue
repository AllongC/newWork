<template>
  <div>
    <topSec val="我的跟帖" />
    <div class="comment" v-for="item in comment" :key="item.id">
      <p class="time">{{item.create_date.split('T')[0]}}</p>
      <div class="parent" v-if="item.parent">
        <div class="replace">回复：{{item.parent.user.nickname}}</div>
        <p class="parentContent">{{item.parent.content}}</p>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="title">
        <p>原文：{{item.post.title}}</p>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
  </div>
</template>

<script>
import topSec from "@/components/topSec";
export default {
  data() {
    return {
      comment: []
    };
  },
  components: {
    topSec
  },
  mounted() {
    this.$axios({
      url: "/user_comments",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.comment = data;
    });
  }
};
</script>

<style lang="less" scoped>
.comment {
  padding: 20px;
  border-bottom: 1px solid #e4e4e4;
  .time {
    color: #888;
    font-size: 14px;
    margin: 10px 0px;
  }
  .parent {
    background-color: #e4e4e4;
    padding: 10px;
    font-size: 14px;
    color: #888;
    .replace {
      padding: 6px 0px;
    }
    .parentContent {
      padding: 6px 0px;
    }
  }
  .content {
    margin-top: 10px;
  }
  .title {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
    color: #888;
    p {
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      flex: 1;
      text-align: right;
    }
  }
}
</style>