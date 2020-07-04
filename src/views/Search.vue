<template>
  <div>
    <div class="searchTop">
      <span @click="goBack" class="iconfont iconjiantou"></span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="keyword" placeholder="请输入关键字" />
      </div>
      <p @click="searchKeyword">搜索</p>
    </div>
    <div v-if="!searchResult.length&&noResult">
      <div class="history">
        <h2>历史记录</h2>
        <div class="items">
          <p
            class="item"
            @click="searchSuggestKeyword(item)"
            v-for="(item,index) in historyKeyword"
            :key="index"
          >{{item}}</p>
        </div>
      </div>
      <div class="hot">
        <h2>热门搜索</h2>
        <div class="items">
          <div
            class="item"
            @click="searchSuggestKeyword(item)"
            v-for="(item,index) in hotKeyword"
            :key="index"
          >{{item}}</div>
        </div>
      </div>
    </div>
    <div class="noresult" v-else-if="!searchResult.length&&!noResult">没有找到关于 “{{keyword}}” 的内容</div>
    <HomeCategory v-for="post in searchResult" :key="post.id" :category="post" />
  </div>
</template>

<script>
import HomeCategory from "@/components/HomeCategory";
export default {
  data() {
    return {
      keyword: "",
      searchResult: [],
      noResult: true,
      historyKeyword: [],
      hotKeyword: ["关晓彤", "张信哲", "王祖贤"]
    };
  },
  components: {
    HomeCategory
  },
  watch: {
    keyword(newVal) {
      if (!newVal) {
        this.noResult = true;
        this.searchResult = [];
      }
    },
    historyKeyword() {
      localStorage.setItem(
        "historyKeyword",
        JSON.stringify(this.historyKeyword)
      );
    }
  },
  mounted() {
    const localKeyword = localStorage.getItem("historyKeyword");
    if (localKeyword) {
      this.historyKeyword = JSON.parse(localKeyword);
    }
  },
  methods: {
    searchKeyword() {
      this.$axios({
        url: "/post_search",
        method: "get",
        params: {
          keyword: this.keyword
        }
      }).then(res => {
        const { data } = res.data;
        this.searchResult = data;
        if (this.keyword && this.historyKeyword.indexOf(this.keyword) == -1) {
          this.historyKeyword.push(this.keyword);
        }
        if (this.searchResult.length == 0) {
          this.noResult = false;
        }
      });
    },
    searchSuggestKeyword(item) {
      this.keyword = item;
      this.searchKeyword();
    },
    goBack() {
      if (this.keyword) {
        this.keyword = "";
      } else {
        this.$router.back();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.searchTop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  span {
    margin-right: 10px;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 38px;
    border: 1px solid #999;
    border-radius: 20px;
    span {
      margin-left: 10px;
    }
    input {
      flex: 1;
      border: none;
      margin-right: 20px;
      margin-left: 10px;
      font-size: 14px;
    }
  }
  p {
    margin: 0px 10px;
  }
}
.history {
  padding: 10px 0px;
  margin: 0px 10px;
  border-bottom: 1px solid #e4e4e4;
  h2 {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      font-size: 14px;
      color: #333;
      margin: 0px 5px;
      padding: 10px 10px;
    }
  }
}
.hot {
  padding: 10px 0px;
  margin: 0px 10px;
  h2 {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      font-size: 14px;
      color: #333;
      margin: 0px 5px;
      padding: 10px 10px;
    }
  }
}
.noresult {
  text-align: center;
  margin-top: 150px;
  font-size: 14px;
  color: #888;
}
</style>