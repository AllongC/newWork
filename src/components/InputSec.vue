<template>
  <div class="InputSec">
    <input
      :type="type"
      :placeholder="InputText"
      v-model="EditVal"
      :class="{error:!flag}"
      @blur="leaved"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      EditVal: "",
      flag: true
    };
  },
  props: ["type", "InputText", "errMsg", "rule"],
  methods: {
    leaved() {
      if (!this.flag) {
        this.$toast.fail(this.errMsg);
        return;
      }
      this.$emit("sendData", this.EditVal);
    }
  },
  watch: {
    EditVal(newVal) {
      this.flag = new RegExp(this.rule).test(newVal);
    }
  }
};
</script>

<style lang="less" scoped>
.InputSec {
  padding: 0vw 5.556vw 0vw 5.556vw;
  input {
    width: 100%;
    height: 16.667vw;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 5vw;
  }
  .error {
    border-bottom-color: #d81e06;
  }
}
</style>