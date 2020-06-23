<template>
  <div>
    <div class="userSec">
      <img src="@/assets/logo.jpg" alt />
      <div class="InfoSec">
        <p>
          <span class="iconfont iconxingbienan"></span>火星网页
        </p>
        <p class="createDate">2019-10-10</p>
      </div>
      <p class="arrowsSec">
        <span class="iconfont iconjiantou1"></span>
      </p>
    </div>
    <UserList MyFocus="我的关注" FocusInfo="关注的用户" @ToDirection="direction('MyFocus')" />
    <UserList MyFocus="我的跟帖" FocusInfo="跟帖/回复" @ToDirection="direction('MyPost')" />
    <UserList MyFocus="我的收藏" FocusInfo="文章/视频" @ToDirection="direction('MyCollect')" />
    <UserList MyFocus="设置" FocusInfo @ToDirection="direction('MySet')" />
  </div>
</template>

<script>
import UserList from "@/components/UserList";
export default {
  methods: {
    direction(MyFocus) {
      console.log(MyFocus);
    }
  },
  components: {
    UserList
  }
};
</script>

<style lang="less" scoped>
.userSec {
  display: flex;
  height: 44.444vw;
  align-items: center;
  padding: 0vw 3.889vw 0vw 5.556vw;
  border-bottom: 1.111vw solid #e4e4e4;
  img {
    height: 25vw;
    width: 25vw;
    border-radius: 50%;
    margin-right: 4.167vw;
  }
  .InfoSec {
    flex: 1;
    .iconxingbienan {
      font-size: 5vw;
      color: #81b7de;
      margin-right: 2.222vw;
    }
    .createDate {
      margin-top: 3.889vw;
      color: #c3c3c3;
    }
  }
  .arrowsSec {
    .iconjiantou1 {
      color: #c3c3c3;
    }
  }
}
</style>