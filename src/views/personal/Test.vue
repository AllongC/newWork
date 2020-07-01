<template>
  <div>
    <index :comment="item" v-for="item in commentList" :key="item.id" />
  </div>
</template>

<script>
import index from "@/views/comment/index";
export default {
  data() {
    return {
      commentList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/post_comment/1",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.commentList = data;
    });
  },
  components: {
    index
  }
};
</script>

<style lang="less" scoped>
</style>