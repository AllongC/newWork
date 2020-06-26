<template>
  <div v-if="data">
    <topSec val="编辑资料" />
    <div class="imgSec">
      <img v-if="data.head_img" :src="$axios.defaults.baseURL+ data.head_img" alt />
      <img v-else src="@/assets/logo.jpg" alt />
      <van-uploader :after-read="afterRead" />
    </div>
    <UserList MyFocus="昵称" :FocusInfo="data.nickname" @ToDirection="nicknameShow = true" />
    <UserList MyFocus="密码" FocusInfo="******" @ToDirection="pwdShow = true" />
    <UserList MyFocus="性别" :FocusInfo="data.gender==1?'男':'女'" @ToDirection="genderShow = true" />
    <van-dialog v-model="nicknameShow" title="修改昵称" show-cancel-button @confirm="editNickname">
      <van-field v-model="nicknameVal" label="新昵称" placeholder="请输入新的昵称" />
    </van-dialog>
    <van-dialog v-model="pwdShow" title="修改密码" show-cancel-button @confirm="editPwd">
      <van-field v-model="oldPwdVal" label="旧密码" placeholder="请输入旧的密码" />
      <van-field v-model="newPwdVal" label="新密码" placeholder="请输入新的密码" />
    </van-dialog>
    <van-action-sheet
      v-model="genderShow"
      :actions="genders"
      cancel-text="取消"
      close-on-click-action
      @select="setGender"
    />
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
      pwdShow: false,
      genderShow: false,
      nicknameVal: "",
      conPwdVal: "",
      oldPwdVal: "",
      newPwdVal: "",
      genders: [
        {
          name: "男",
          gender: 1
        },
        {
          name: "女",
          gender: 0
        }
      ]
    };
  },
  methods: {
    upData() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
        method: "get"
      }).then(res => {
        const { message, data } = res.data;
        if (message == "获取成功") {
          this.data = data;
          this.conPwdVal = data.password;
        }
      });
    },
    editEvery(data) {
      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method: "post",
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
    },
    editPwd() {
      if (this.oldPwdVal !== this.conPwdVal) {
        this.$toast.fail("输入的旧密码不正确");
        this.oldPwdVal = "";
        this.newPwdVal = "";
        return;
      }
      if (!this.newPwdVal) {
        this.oldPwdVal = "";
        this.newPwdVal = "";
        this.$toast.fail("输入的密码不能为空");
        return;
      }
      this.editEvery({ password: this.newPwdVal });
      this.oldPwdVal = "";
      this.newPwdVal = "";
    },
    setGender(item) {
      this.editEvery({ gender: item.gender });
    },
    afterRead(fileObj) {
      const data = new FormData();
      data.append("file", fileObj.file);
      this.$axios({
        url: "/upload",
        method: "post",

        data: data
      }).then(res => {
        const { message, data } = res.data;
        if (message == "文件上传成功") {
          this.editEvery({ head_img: data.url });
        }
      });
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
  position: relative;
  height: 38.889vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 50%;
  }
  .van-uploader {
    opacity: 0;
  }
}
</style>