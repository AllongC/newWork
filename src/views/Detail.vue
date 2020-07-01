<template>
  <div>
    <div class="DetailTop">
      <span class="iconfont iconjiantou2"></span>
      <span class="iconfont iconnew"></span>
      <button @click="toggleFollow" v-if="post.type==1&&post.has_follow">已关注</button>
      <button @click="toggleFollow" class="redBtn" v-if="post.type==1&&!post.has_follow">关注</button>
    </div>
    <div class="normal" v-if="post.type==1">
      <div class="title">{{post.title}}</div>
      <p>{{post.user.nickname}} {{post.create_date.split('T')[0]}}</p>
      <div class="content" v-html="post.content"></div>
    </div>
    <div class="video" v-else-if="post.type==2">
      <video
        controls
        src="https://video.pearvideo.com/mp4/third/20200629/cont-1682744-11905134-133619-hd.mp4"
        poster="https://image.pearvideo.com/cont/20200629/cont-1682744-12415386.png"
      ></video>
      <div class="userInfo">
        <img v-if="post.user.head_img" :src="$axios.defaults.baseURL+post.user.head_img" alt />
        <img v-else src="@/assets/logo.jpg" alt />
        <p>{{post.user.nickname}}</p>
        <button @click="toggleFollow" v-if="post.type==2&&post.has_follow">已关注</button>
        <button @click="toggleFollow" class="redBtn" v-if="post.type==2&&!post.has_follow">关注</button>
      </div>
      <div class="title">{{post.title}}</div>
    </div>
    <div class="DetailBottom">
      <p @click="like" :class="{dianzan:post.has_like}">
        <span class="iconfont icondianzan"></span>
        {{post.like_length}}
      </p>
      <p>
        <span class="iconfont iconweixin"></span>微信
      </p>
    </div>
    <div class="comment" v-if="commentList.length">
      <index :comment="item" v-for="item in commentList" :key="item.id" />
    </div>
    <div v-else class="noComment">快来抢沙发...</div>
  </div>
</template>

<script>
import index from "@/views/comment/index";
export default {
  data() {
    return {
      post: [],
      commentList: []
    };
  },
  methods: {
    toggleFollow() {
      if (this.post.has_follow) {
        this.$axios({
          url: "/user_unfollow/" + this.post.user.id,
          method: "get"
        }).then(res => {
          this.post.has_follow = false;
        });
      } else {
        this.$axios({
          url: "/user_follows/" + this.post.user.id,
          method: "get"
        }).then(res => {
          this.post.has_follow = true;
        });
      }
    },
    like() {
      this.$axios({
        url: "/post_like/" + this.post.id
      }).then(res => {
        const { message } = res.data;
        if (message == "点赞成功") {
          this.post.like_length += 1;
        } else {
          this.post.like_length -= 1;
        }
      });
    }
  },
  mounted() {
    this.$axios({
      url: "/post/" + this.$route.params.id
    }).then(res => {
      const { data } = res.data;
      this.post = data;
    });
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
      method: "get"
    }).then(res => {
      const { data } = res.data;
      if (data.length >= 3) {
        data.length = 3;
      }
      this.commentList = data;
    });
  },
  components: {
    index
  }
};
</script>

<style lang="less" scoped>
.DetailTop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 10px;
  .iconnew {
    font-size: 54px;
    flex: 1;
    margin-left: 6px;
  }
  button {
    text-align: center;
    height: 26px;
    padding: 0px 14px;
    border: 1px solid #888;
    border-radius: 14px;
    font-size: 12px;
  }
  .redBtn {
    border: 1px solid red;
    color: #fff;
    background-color: red;
  }
}
.normal {
  padding: 0px 10px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    margin: 14px 0px;
    font-size: 14px;
    color: #999;
  }
  /deep/ .content {
    img {
      width: 100%;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      color: #333;
    }
  }
}
.DetailBottom {
  display: flex;
  justify-content: space-around;
  padding: 24px 10px;
  border-bottom: 2px solid #e4e4e4;
  p {
    text-align: center;
    line-height: 26px;
    height: 26px;
    padding: 0px 14px;
    border: 1px solid #888;
    border-radius: 14px;
    font-size: 12px;
  }
  .dianzan {
    border: 1px solid red;
    color: red;
  }
  .icondianzan {
    margin-right: 4px;
  }
  .iconweixin {
    margin-right: 4px;
    color: #1dcd1d;
  }
}
.video {
  video {
    width: 100%;
  }
  .userInfo {
    padding: 24px 10px;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    p {
      margin-left: 8px;
      flex: 1;
      font-size: 14px;
      color: #888;
    }

    button {
      text-align: center;
      height: 26px;
      padding: 0px 14px;
      border: 1px solid #888;
      border-radius: 14px;
      font-size: 12px;
    }
    .redBtn {
      border: 1px solid red;
      color: #fff;
      background-color: red;
    }
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 0px 10px;
  }
}
.noComment {
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #999;
}
</style>