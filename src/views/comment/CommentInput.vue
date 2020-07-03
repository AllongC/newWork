<template>
  <div>
    <div class="display" v-if="isShow">
      <input type="text" @focus="onFocus" v-model="content" />
      <span class="iconfont iconpinglun-"></span>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
    <div class="hidden" v-if="!isShow">
      <textarea rows="3" @blur="unFocus" ref="textarea" v-model="content"></textarea>
      <p @click="sendContent">发送</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      content: ""
    };
  },
  methods: {
    onFocus() {
      this.isShow = false;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    unFocus() {
      setTimeout(() => {
        this.isShow = true;
      }, 100);
    },
    sendContent() {
      const data = {
        content: this.content
      };
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "post",
        data
      }).then(res => {
        const { message } = res.data;
        if (message == "评论发布成功") {
          this.content = "";
          this.$emit("reload");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.display {
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: flex-end;
  padding: 10px 0px;
  background-color: #f2f2f2;
  width: 100%;
  input {
    flex: 1;
    height: 30px;
    border: none;
    outline: none;
    background-color: #d7d7d7;
    border-radius: 15px;
    margin: 0px 10px;
    text-indent: 10px;
  }
  span {
    font-size: 22px;
    margin: 0px 10px;
  }
  .iconpinglun- {
    position: relative;
  }
  .iconpinglun-::after {
    content: "1020";
    position: absolute;
    top: -10px;
    left: 8px;
    font-size: 10px;
    background-color: red;
    color: white;
    padding: 0px 6px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
  }
}
.hidden {
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: flex-end;
  padding: 10px 0px;
  background-color: #f2f2f2;
  width: 100%;
  textarea {
    flex: 1;
    border: none;
    background-color: #d7d7d7;
    height: 90px;
    margin: 0px 10px;
    resize: none;
    border-radius: 10px;
    text-indent: 10px;
  }
  p {
    background-color: red;
    color: white;
    height: 30px;
    line-height: 30px;
    padding: 0px 30px;
    margin: 0px 10px;
    border-radius: 15px;
    font-size: 14px;
  }
}
</style>