<template>
  <div>
    <topSec val="栏目管理" />
    <div class="delColumn">
      <h2 class="title">点击删除以下频道</h2>
      <div class="items">
        <div
          class="item"
          @click="delArr(index)"
          v-for="(item,index) in delColumn"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="addColumn">
      <h2 class="title">点击添加以下频道</h2>
      <div class="items">
        <div
          class="item"
          @click="addArr(index)"
          v-for="(item,index) in addColumn"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import topSec from "@/components/topSec";
export default {
  components: {
    topSec
  },
  data() {
    return {
      addColumn: [],
      delColumn: []
    };
  },
  watch: {
    addColumn() {
      localStorage.setItem("addColumn", JSON.stringify(this.addColumn));
      localStorage.setItem("delColumn", JSON.stringify(this.delColumn));
    }
  },
  mounted() {
    const localAddColumn = localStorage.getItem("addColumn");
    const localDelColumn = localStorage.getItem("delColumn");
    if (localAddColumn || localDelColumn) {
      this.addColumn = JSON.parse(localAddColumn);
      this.delColumn = JSON.parse(localDelColumn);
      return;
    }
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.delColumn = data;
    });
  },
  methods: {
    delArr(index) {
      if (this.delColumn.length == 1) {
        return;
      }
      this.addColumn.push(this.delColumn[index]);
      this.delColumn.splice(index, 1);
    },
    addArr(index) {
      this.delColumn.push(this.addColumn[index]);
      this.addColumn.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped>
.delColumn {
  padding: 10px;
  .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #888;
    font-weight: normal;
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      margin: 10px 10px;
      padding: 10px 16px;
      border: 1px solid #888;
    }
  }
}
.addColumn {
  padding: 10px;
  .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #888;
    font-weight: normal;
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      margin: 10px 10px;
      padding: 10px 16px;
      border: 1px solid #888;
    }
  }
}
</style>