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
  props: ["type", "InputText", "errMsg"],
  methods: {
    leaved() {
      if (!this.flag) {
        console.log(this.errMsg);
      }
    }
  },
  watch: {
    EditVal(newVal) {
      this.flag = new RegExp(/^\d{3,6}$/).test(newVal);
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