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
        console.log(res);
      });
    },
    follow(id) {
      this.$axios({
        url: "/user_follows/" + id
      }).then(res => {
        console.log(res);
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
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #e5e5e5;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
  }
  .info {
    flex: 1;
    p {
      font-size: 14px;
      color: #888;
    }
    .title {
      font-size: 16px;
      color: #333;
      margin-bottom: 4px;
    }
  }
  button {
    height: 30px;
    padding: 0px 10px;
    border-radius: 15px;
    border: none;
    font-size: 14px;
    color: #888;
  }
  .redBtn {
    height: 30px;
    padding: 0px 10px;
    border-radius: 15px;
    border: none;
    font-size: 14px;
    color: #fff;
    background-color: red;
  }
}
</style>