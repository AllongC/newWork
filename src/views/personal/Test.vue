<template>
  <div>
    <button @click="add(1)">用户1</button>
    <button @click="add(2)">用户2</button>
    <button @click="add(3)">用户3</button>
    <button @click="add(4)">用户4</button>
    <button @click="add(5)">用户5</button>
    <button @click="add(6)">用户6</button>
    <button @click="add(7)">用户7</button>
    <button @click="add(8)">用户8</button>
    <button @click="add(9)">用户9</button>
  </div>
</template>

<script>
export default {
  methods: {
    add(id) {
      this.$axios({
        url: "/user_follows/" + id
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>