<template>
  <view>
    <u-icon name="photo" color="#2979ff" size="58" @click="login"></u-icon>
    <i class="iconfont iconkaifajindu" />
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$api
        .login({
          json: {
            userAccount: "xieyu",
            password: "1qaz2wsx",
            isRememb: "true",
          },
        })
        .then((res) => {
          console.log("res");
          console.log(res);
        })
        .catch((err) => {
          console.log("err");
          console.log(err);
          this.$router.toPage("/pages/index/index", {
            id: "222",
            p: "cccc",
          });
        });
    },
  },
};
</script>

<style></style>
