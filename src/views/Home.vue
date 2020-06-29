<template>
  <div>
    <HomeTop />
    <van-tabs v-model="current" bind:change="onChange">
      <van-tab v-for="item in header" :key="item.id" :title="item.name">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          :immediate-check="false"
          finished-text="我也是有底线的"
          @load="loadMore"
        >
          <HomeCategory v-for="post in item.category" :key="post.id" :category="post" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop";
import HomeCategory from "@/components/HomeCategory";
export default {
  data() {
    return {
      current: 0,
      header: []
    };
  },
  methods: {
    update() {
      this.$axios({
        url: "/category"
      }).then(res => {
        const { data } = res.data;
        this.header = data.map(item => {
          return {
            ...item,
            category: [],
            pageIndex: 1,
            pageSize: 5,
            finished: false,
            loading: false
          };
        });
        this.getCategory();
      });
    },

    getCategory() {
      const item = this.header[this.current];
      this.$axios({
        url: "/post",
        methods: "get",
        params: {
          category: this.getId(),
          pageIndex: item.pageIndex,
          pageSize: item.pageSize
        }
      }).then(res => {
        const { data } = res.data;
        item.category = [...item.category, ...data];
        console.log(item.category);
      });
    },

    loadMore() {
      const item = this.header[this.current];
      item.pageIndex += 1;
      this.getCategory();
      if (item.category.length <= item.pageSize) {
        item.finished = true;
      }
    },

    getId() {
      return this.header[this.current].id;
    }
  },
  watch: {
    current() {
      if (this.header[this.current].category.length == 0) {
        this.getCategory();
      }
    }
  },
  mounted() {
    this.update();
  },
  components: {
    HomeTop,
    HomeCategory
  }
};
</script>

<style lang="less" scoped>
</style>