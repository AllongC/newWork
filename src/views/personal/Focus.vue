<template>
  <div>
    <topSec val="我的关注" />
    <FoucsList
      :dataArr="item"
      v-for="item in dataArr"
      :key="item.id"
      @change="unFocus"
      @addFocus="addFocus"
      :delArr="delArr"
    />
  </div>
</template>

<script>
import topSec from "@/components/topSec";
import FoucsList from "@/components/FoucsList";
export default {
  data() {
    return {
      dataArr: [],
      delArr: []
    };
  },
  methods: {
    upData() {
      this.$axios({
        url: "/user_follows",
        method: "get"
      }).then(res => {
        this.dataArr = res.data.data;
      });
    },
    delFocus(id) {
      this.$axios({
        url: "/user_unfollow/" + id,
        method: "get"
      }).then(res => {
        this.upData();
      });
    },
    unFocus(id) {
      this.delArr.push(id);
    },
    addFocus(id) {
      const newArr = this.delArr.map(item => {
        if (item !== id) {
          return item;
        }
      });
      this.delArr = newArr;
    }
  },
  components: {
    topSec,
    FoucsList
  },
  mounted() {
    this.upData();
  },
  destroyed() {
    this.delArr.forEach(item => {
      this.delFocus(item);
    });
  }
};
</script>

<style lang="less" scoped>
</style>