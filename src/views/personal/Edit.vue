<template>
  <div v-if="data">
    <topSec val="编辑资料" />
    <div class="imgSec">
      <img v-if="data.head_img" :src="$axios.defaults.baseURL+ data.head_img" alt />
      <img v-else src="@/assets/logo.jpg" alt />
    </div>
    <UserList MyFocus="昵称" :FocusInfo="data.nickname" @ToDirection="nicknameShow = true" />
    <UserList MyFocus="密码" FocusInfo="******" />
    <UserList MyFocus="性别" :FocusInfo="data.gender==1?'男':'女'" />
    <van-dialog v-model="nicknameShow" title="修改昵称" show-cancel-button @confirm="editNickname">
      <van-field v-model="nicknameVal" label="新昵称" placeholder="请输入新的昵称" />
    </van-dialog>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import topSec from "@/components/topSec";
export default {
  data() {
    return {
      data: null,
      nicknameShow: false,
      nicknameVal: ""
    };
  },
  methods: {
    upData() {
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
    editEvery(data) {
      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method: "post",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        data: data
      }).then(res => {
        const { message } = res.data;
        if (message == "修改成功") {
          this.upData();
        }
      });
    },
    editNickname() {
      if (!this.nicknameVal) {
        this.$toast.fail("输入不能为空！");
        return;
      }
      this.editEvery({ nickname: this.nicknameVal });
      this.nicknameVal = "";
    }
  },
  created() {
    this.upData();
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