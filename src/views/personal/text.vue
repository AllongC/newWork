<template>
  <div>
    <button @click="addUser(1)">用户1</button>
    <button @click="addUser(2)">用户2</button>
    <button @click="addUser(3)">用户3</button>
    <button @click="addUser(5)">用户5</button>
    <button @click="addUser(4)">用户4</button>
    <button @click="addUser(10)">用户10</button>
    <button @click="addUser(11)">用户11</button>
  </div>
</template>

<script>
export default {
  methods: {
    addUser(id) {
      this.$axios({
        url: "/user_follows/" + id,
        method: "get"
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>