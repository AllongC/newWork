<template>
  <div>
    <div class="closeSec">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="LogoSec">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="InputSec">
      <input type="text" />
    </div>
    <div class="InputSec">
      <input type="text" />
    </div>
    <div class="LoginSec">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {};
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
.InputSec {
  padding: 0vw 5.556vw 0vw 5.556vw;
  input {
    height: 16.667vw;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
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
    border-radius: 8.333vw;
  }
}
</style>