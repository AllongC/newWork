<template>
  <div>
    <topSec val="编辑资料" />
    <div class="imgSec">
      <img src="@/assets/logo.jpg" alt />
    </div>
    <UserList MyFocus="昵称" FocusInfo="火星网页" />
    <UserList MyFocus="密码" FocusInfo="******" />
    <UserList MyFocus="性别" FocusInfo="男" />
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import topSec from "@/components/topSec";
export default {
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