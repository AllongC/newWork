<template>
  <div>
    <CommonSec />
    <InputSec
      type="text"
      InputText="用户名/手机号码"
      errMsg="手机号码格式不正确"
      :rule="ruleUser"
      @sendData="setUsername"
    />
    <InputSec
      type="password"
      InputText="密码"
      errMsg="密码格式不正确"
      :rule="rulePwd"
      @sendData="setPassword"
    />
    <LoginSec BtnInfo="登录" @send="accept" />
  </div>
</template>

<script>
import InputSec from "@/components/InputSec";
import LoginSec from "@/components/LoginSec";
import CommonSec from "@/components/CommonSec";
export default {
  data() {
    return {
      username: "",
      password: "",
      ruleUser: "^\\d{3,6}$",
      rulePwd: "^\\d{3,6}$"
    };
  },
  methods: {
    setUsername(newVal) {
      this.username = newVal;
    },
    setPassword(newVal) {
      this.password = newVal;
    },
    accept() {
      if (this.username == "" || this.password == "") {
        this.$toast.fail("输入不能为空!");
        return;
      }
      let reg = new RegExp(this.ruleUser).test(this.username);
      if (!reg) {
        this.$toast.fail("手机号码格式不正确!");
        return;
      }
      reg = new RegExp(this.rulePwd).test(this.password);
      if (!reg) {
        this.$toast.fail("密码格式不正确!");
        return;
      }
      this.$axios({
        url: "http://127.0.0.1:3000/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        const { message, data } = res.data;
        if (message === "登录成功") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);
          this.$toast.success(message);
          setTimeout(() => {
            this.$router.push("/center");
          }, 500);
        } else {
          this.$toast.fail(message);
        }
      });
    }
  },
  components: {
    InputSec,
    LoginSec,
    CommonSec
  }
};
</script>

<style lang="less" scoped>
</style>