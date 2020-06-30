<template>
  <div>
    <topSec val="我的收藏" />
    <HomeCategory v-for="post in category" :key="post.id" :category="post" />
  </div>
</template>

<script>
import topSec from "@/components/topSec";
import HomeCategory from "@/components/HomeCategory";
export default {
  data() {
    return {
      category: []
    };
  },
  components: {
    topSec,
    HomeCategory
  },
  mounted() {
    this.$axios({
      url: "/user_star",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.category = data;
    });
  }
};
</script>

<style lang="less" scoped>
</style>