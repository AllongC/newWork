<template>
  <div>
    <topSec val="更多跟贴" />
    <index :comment="item" v-for="item in commentList" :key="item.id" />
  </div>
</template>

<script>
import topSec from "@/components/topSec";
import index from "@/views/comment/index";
export default {
  data() {
    return {
      commentList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.commentList = data;
    });
  },
  components: {
    index,
    topSec
  }
};
</script>

<style lang="less" scoped>
</style>