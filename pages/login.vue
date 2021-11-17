<template>
  <view class="content">
    <view class="img-container">
      <!-- <image class="img-view" src="/static/logo.png"></image> -->
      <view class="name-view">临e家</view>
    </view>

    <view class="tag">账号</view>
    <view class="col-item-container row-line-between">
      <input
        class="input-view"
        placeholder="请输入手机号码"
        v-model="userName"
      />
    </view>
    <view>
      <view class="tag">密码</view>
      <view class="col-item-container row-line-between">
        <input
          class="input-view"
          placeholder="请输入密码"
          :password="isPwd"
          v-model="passWord"
        />
        <i
          class="iconfont"
          style="width: 16px; font-size: 12px"
          :class="isPwd ? 'iconyanjing' : 'iconyanjing1'"
          @click="isPwd = !isPwd"
        ></i>
      </view>
    </view>

    <view class="row-line-between links">
      <u-checkbox v-model="isRememberAccount" shape="circle"
        >记住密码</u-checkbox
      >
    </view>
    <view class="btn-container" @click="checkData"> 登录 </view>
    <view class="bottom" > 一键登录 </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      isRememberAccount: true,
      wxCode: "",
      isPwd: true,
    };
  },
  onLoad() {
    let loginMsg = uni.getStorageSync(this.$savekey.LOGIN_MEG);
    if (loginMsg && loginMsg.value) {
      this.goToIndex();
    }
    let accountObj = uni.getStorageSync(this.$savekey.USER_ACCOUNT);
    this.userName = accountObj ? accountObj.account : "";
    this.passWord = accountObj ? accountObj.pwd : "";
  },
  methods: {
    //数据校验
    checkData() {
      if (!this.userName.replace(/(^\s*)|(\s*$)/g, "")) {
        this.$u.toast("请输入手机号");
        return;
      }
      if (!this.isCodeLogin && !this.passWord.replace(/(^\s*)|(\s*$)/g, "")) {
        this.$u.toast("请输入密码");
        return;
      }
      this.login();
    },

    login() {
	  this.$api.login({
		  ssn: this.userName.trim(),
		  passWord: this.passWord.trim(),
	  }).then(res=>{
		  uni.setStorageSync(this.$savekey.LOGIN_MEG, result);
		  uni.setStorageSync(this.$savekey.USER_ACCOUNT, {
		    account: this.userName,
		    pwd:
		      this.isRememberAccount && !this.isCodeLogin ? this.passWord : "",
		  });
		  this.goMain();
	  }).catch(err=>{
		  console.log("err")
		  console.log(err)
	  })
    },
    
    goMain() {
		this.$router.toPage("/pages/home",null,"tab")
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  background-color: #ffffff;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  position: relative;
}

.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.img-view {
  margin-top: 100px;
  width: 56px;
  height: 56px;
}

.name-view {
  margin-top: 8px;
  font-size: 24px;
  color: #444444;
}

.tag {
  font-size: 14px;
  color: #7e8389;
  margin: 15px 20px 4px 20px;
}

.col-item-container {
  width: calc(100% - 60px);
  margin: 0px 20px;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  font-size: 14px;
  color: #333333;
}

.input-view {
  flex: 1;
  margin-right: 8px;
}


.links {
  margin: 30px 20px 4px 20px;
  font-size: 13px;
  color: #999999;
}

.remember-text {
  padding-left: 2px;
}

.btn-container {
  width: calc(100% - 60px);
  margin: 0px 20px;
  background-color: #00a098;
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bottom {
  position: absolute;
  left: 0px;
  bottom: 10px;
  line-height: 30px;
  width: 100%;
  text-align: center;
}

</style>
