<template>
  <view> 我的 </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    this.save();
  },
  methods: {
    save() {
      
      console.log("text-------------" + text);
      console.log(this.$httpMethod);
      // this.$httpMethod.getMethod("userapi/api/auth/login", {
      // 	username: text,
      // 	password: "token"
      // })
    },
  },
};
</script>

<style></style>
