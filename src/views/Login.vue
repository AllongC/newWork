<template>
  <div>
    <div class="closeSec">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="LogoSec">
      <span class="iconfont iconnew"></span>
    </div>
    <InputSec type="text" InputText="用户名/手机号码" errMsg="手机号码格式不正确" />
    <InputSec type="password" InputText="密码" errMsg="密码格式不正确" />
    <div class="LoginSec">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import InputSec from "@/components/InputSec";
export default {
  components: {
    InputSec
  }
};
</script>

<style lang="less" scoped>
.closeSec {
  padding: 8.333vw 0vw 0vw 8.333vw;
  .iconicon-test {
    font-size: 8.333vw;
  }
}
.LogoSec {
  text-align: center;
  .iconnew {
    font-size: 33.333vw;
    color: #d81e06;
  }
}
.LoginSec {
  margin-top: 16.667vw;
  padding: 0vw 5.556vw 0vw 5.556vw;
  button {
    width: 100%;
    height: 16.667vw;
    border: none;
    background-color: #d81e06;
    text-align: center;
    color: white;
    font-size: 5vw;
    outline: none;
    border-radius: 8.333vw;
  }
}
</style>