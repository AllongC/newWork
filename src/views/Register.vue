<template>
  <div>
    <CommonSec />
    <InputSec
      type="text"
      InputText="用户名/手机号码"
      errMsg="手机号码格式不正确"
      rule="^\d{3,6}$"
      @sendData="setUsername"
    />
    <InputSec type="text" InputText="昵称" errMsg="昵称格式不正确" rule="^\w{3,6}$" @sendData="setNickname" />
    <InputSec
      type="password"
      InputText="密码"
      errMsg="密码格式不正确"
      rule="^\d{3,6}$"
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
      password: ""
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
      console.log(this.username);
      console.log(this.nickname);
      console.log(this.password);
      console.log("父组件触发...");
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