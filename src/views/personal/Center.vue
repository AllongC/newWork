<template>
  <div>
    <div class="userSec" v-if="dataObj" @click="edit">
      <img v-if="dataObj.head_img" :src="$axios.defaults.baseURL+dataObj.head_img" alt />
      <img v-else src="@/assets/logo.jpg" alt />
      <div class="InfoSec">
        <p>
          <span v-if="dataObj.gender==1" class="iconfont iconxingbienan"></span>
          <span v-else class="iconfont iconxingbienv"></span>
          {{dataObj.nickname}}
        </p>
        <p class="createDate">{{dataObj.create_date.split('T')[0]}}</p>
      </div>
      <p class="arrowsSec">
        <span class="iconfont iconjiantou1"></span>
      </p>
    </div>
    <UserList MyFocus="我的关注" FocusInfo="关注的用户" @ToDirection="$router.push('/focus')" />
    <UserList MyFocus="我的跟帖" FocusInfo="跟帖/回复" @ToDirection="direction('MyPost')" />
    <UserList MyFocus="我的收藏" FocusInfo="文章/视频" @ToDirection="$router.push('/collect')" />
    <UserList MyFocus="设置" FocusInfo @ToDirection="direction('MySet')" />
    <UserList MyFocus="退出" FocusInfo @ToDirection="direction('quit')" />
  </div>
</template>

<script>
import UserList from "@/components/UserList";
export default {
  data() {
    return {
      dataObj: null
    };
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.dataObj = data;
      }
    });
  },
  methods: {
    direction(MyFocus) {
      if (MyFocus == "quit") {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        this.$router.replace("/login");
      }
    },
    edit() {
      this.$router.push("/edit");
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