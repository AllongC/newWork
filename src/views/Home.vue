<template>
  <div>
    <HomeTop />
    <van-tabs v-model="current" bind:change="onChange">
      <van-tab v-for="item in header" :key="item.id" :title="item.name">
        <HomeCategory v-for="item in category" :key="item.id" :category="item" />
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
      header: [],
      category: []
    };
  },
  methods: {
    update() {
      this.$axios({
        url: "/category"
      }).then(res => {
        const { data } = res.data;
        this.header = data;
        this.getCategory();
      });
    },

    getCategory() {
      this.$axios({
        url: "/post",
        methods: "get",
        params: {
          category: this.getId()
        }
      }).then(res => {
        const { data } = res.data;
        this.category = data;
      });
    },

    getId() {
      return this.header[this.current].id;
    }
  },
  watch: {
    current() {
      this.update();
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