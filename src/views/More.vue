<template>
  <div>
    <topSec val="更多跟贴" />
    <index :comment="item" v-for="item in commentList" :key="item.id" @replace="accept" />
    <CommentInput @reload="load" :contentInfo="contentInfo" ref="CommentInput" />
  </div>
</template>

<script>
import topSec from "@/components/topSec";
import index from "@/views/comment/index";
import CommentInput from "@/views/comment/CommentInput";
export default {
  data() {
    return {
      commentList: [],
      contentInfo: {}
    };
  },
  methods: {
    accept(info) {
      this.contentInfo = info;
      this.$refs.CommentInput.onFocus();
    },
    load() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "get"
      }).then(res => {
        const { data } = res.data;
        this.commentList = data;
      });
    }
  },
  mounted() {
    this.load();
  },
  components: {
    index,
    topSec,
    CommentInput
  }
};
</script>

<style lang="less" scoped>
</style>