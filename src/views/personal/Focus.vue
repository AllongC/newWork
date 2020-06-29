<template>
  <div>
    <FocusTop />
    <div class="focusList" v-for="(item,index) in userInfo" :key="item.id">
      <img v-if="item.head_img" :src="$axios.defaults.baseURL + item.head_img" alt />
      <img v-else src="@/assets/logo.jpg" alt />
      <div class="info">
        <p class="title">{{item.nickname}}</p>
        <p>{{item.create_date.split('T')[0]}}</p>
      </div>
      <button v-if="item.isFocus" @click="unFocus(item.id,index)">取消关注</button>
      <button v-else @click="addFocus(item.id,index)" class="redBtn">关注</button>
    </div>
  </div>
</template>

<script>
import FocusTop from "@/components/FocusTop";
export default {
  data() {
    return {
      userInfo: null
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      this.$axios({
        url: "/user_follows"
      }).then(res => {
        const data = res.data.data.map(item => {
          return { ...item, isFocus: true };
        });
        this.userInfo = data;
      });
    },
    unfollow(id) {
      this.$axios({
        url: "/user_unfollow/" + id
      }).then(res => {
        const { message } = res.data;
        console.log(message);
      });
    },
    follow(id) {
      this.$axios({
        url: "/user_follows/" + id
      }).then(res => {
        const { message } = res.data;
        console.log(message);
      });
    },
    unFocus(id, index) {
      this.userInfo[index].isFocus = false;
      this.unfollow(id);
    },
    addFocus(id, index) {
      this.userInfo[index].isFocus = true;
      this.follow(id);
    }
  },
  components: {
    FocusTop
  }
};
</script>

<style lang="less" scoped>
.focusList {
  padding: 0vw 5.556vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27.778vw;
  border-bottom: 1px solid #e5e5e5;
  img {
    width: 11.111vw;
    height: 11.111vw;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 4.167vw;
  }
  .info {
    flex: 1;
    p {
      font-size: 3.889vw;
      color: #888;
    }
    .title {
      font-size: 4.444vw;
      color: #333;
      margin-bottom: 1.111vw;
    }
  }
  button {
    height: 8.333vw;
    padding: 0vw 2.778vw;
    border-radius: 4.167vw;
    border: none;
    font-size: 3.889vw;
    color: #888;
  }
  .redBtn {
    height: 8.333vw;
    padding: 0vw 2.778vw;
    border-radius: 4.167vw;
    border: none;
    font-size: 3.889vw;
    color: #fff;
    background-color: red;
  }
}
</style>