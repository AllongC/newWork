<template>
  <div v-if="data">
    <topSec val="编辑资料" />
    <div class="imgSec">
      <img v-if="data.head_img" :src="$axios.defaults.baseURL+ data.head_img" alt />
      <img v-else src="@/assets/logo.jpg" alt />
    </div>
    <UserList MyFocus="昵称" :FocusInfo="data.nickname" />
    <UserList MyFocus="密码" FocusInfo="******" />
    <UserList MyFocus="性别" :FocusInfo="data.gender==1?'男':'女'" />
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import topSec from "@/components/topSec";
export default {
  data() {
    return {
      data: null
    };
  },
  created() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.data = data;
      }
    });
  },
  components: {
    UserList,
    topSec
  }
};
</script>

<style lang="less" scoped>
.imgSec {
  height: 38.889vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 50%;
  }
}
</style>