<template>
  <div>
    <CommonSec />
    <InputSec type="text" InputText="用户名/手机号码" errMsg="手机号码格式不正确" @sendData="setUsername" />
    <InputSec type="password" InputText="密码" errMsg="密码格式不正确" @sendData="setPassword" />
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
      password: ""
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
      console.log("父组件触发" + this.password + this.username);
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