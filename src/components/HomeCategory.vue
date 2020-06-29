<template>
  <div>
    <div class="singleImg" v-if="category.type==1&&category.cover.length<3">
      <div class="singInfo">
        <p class="title">{{category.title}}</p>
        <p>{{category.user.nickname}} {{category.comment_length}}跟帖</p>
      </div>
      <img :src="category.cover[0].url" alt />
    </div>
    <div class="multiImg" v-else-if="category.type==1&&category.cover.length>=3">
      <p class="title">{{category.title}}</p>
      <div class="multi">
        <img :src="category.cover[0].url" alt />
        <img :src="category.cover[1].url" alt />
        <img :src="category.cover[2].url" alt />
      </div>
      <p>{{category.user.nickname}} {{category.comment_length}}跟帖</p>
    </div>
    <div class="video" v-else-if="category.type==2&&category.cover.length>=1">
      <p class="title">{{category.title}}</p>
      <div class="mask">
        <img :src="category.cover[0].url" alt />
        <div class="bgc"></div>
        <span class="iconfont iconshipin"></span>
      </div>
      <p>{{category.user.nickname}} {{category.comment_length}}跟帖</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"]
};
</script>

<style lang="less" scoped>
.singleImg {
  box-sizing: border-box;
  padding: 3.889vw 3.889vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  .singInfo {
    flex: 1;
    .title {
      font-size: 4.444vw;
      color: black;
      margin-top: 0vw;
    }
    p {
      margin-top: 2.778vw;
      font-size: 3.889vw;
      color: #888;
    }
  }
  img {
    width: 33.333vw;
    height: 20.556vw;
    object-fit: cover;
  }
}

.multiImg {
  padding: 3.889vw 3.889vw;
  border-bottom: 1px solid #e4e4e4;
  .title {
    font-size: 4.444vw;
    color: black;
    margin-top: 0vw;
  }
  .multi {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      width: 33%;
      height: 20.556vw;
      margin: 1.111vw 0.556vw 0vw 0vw;
    }
  }
  p {
    margin-top: 2.778vw;
    font-size: 3.889vw;
    color: #888;
  }
}

.video {
  padding: 3.889vw 3.889vw;
  border-bottom: 1px solid #e4e4e4;
  .title {
    font-size: 4.444vw;
    color: black;
    margin-top: 0vw;
  }
  .mask {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .bgc {
      position: absolute;
      width: 13.889vw;
      height: 13.889vw;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
    }
    img {
      margin-top: 1.667vw;
      height: 47.222vw;
      width: 100%;
      object-fit: cover;
    }
    .iconshipin {
      position: absolute;
      font-size: 11.111vw;
      color: #fff;
    }
  }
  p {
    margin-top: 2.778vw;
    font-size: 3.889vw;
    color: #888;
  }
}
</style>