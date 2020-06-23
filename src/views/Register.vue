<template>
  <div>
    <CommonSec />
    <InputSec
      type="text"
      InputText="用户名/手机号码"
      errMsg="手机号码格式不正确"
      :rule="ruleName"
      @sendData="setUsername"
    />
    <InputSec type="text" InputText="昵称" errMsg="昵称格式不正确" :rule="ruleNick" @sendData="setNickname" />
    <InputSec
      type="password"
      InputText="密码"
      errMsg="密码格式不正确"
      :rule="rulePwd"
      @sendData="setPassword"
    />
    <LoginSec BtnInfo="注册" @send="accept" />
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
      nickname: "",
      password: "",
      ruleName: "^\\d{3,6}$",
      rulePwd: "^\\d{3,6}$",
      ruleNick: "^\\w{3,6}$"
    };
  },
  methods: {
    setUsername(newVal) {
      this.username = newVal;
    },
    setNickname(newVal) {
      this.nickname = newVal;
    },
    setPassword(newVal) {
      this.password = newVal;
    },
    accept() {
      if (this.username == "" || this.nickname == "" || this.password == "") {
        this.$toast.fail("输入不能为空！");
        return;
      }
      let reg = new RegExp(this.ruleName).test(this.username);
      if (!reg) {
        this.$toast.fail("手机号码格式不正确!");
        return;
      }
      reg = new RegExp(this.ruleNick).test(this.nickname);
      if (!reg) {
        this.$toast.fail("昵称格式不正确!");
        return;
      }
      reg = new RegExp(this.rulePwd).test(this.password);
      if (!reg) {
        this.$toast.fail("密码格式不正确!");
        return;
      }
      this.$axios({
        url: "http://127.0.0.1:3000/register",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        const { message } = res.data;
        if (message == "注册成功") {
          this.$toast.success(message);
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