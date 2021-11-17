<template>
  <view class="content">
    <view class="top">
      <image
        class="image"
        src="/static/login_logo.png"
        mode="aspectFit"
      ></image>
    </view>
    <view class="row-line">
      <view
        class="line-height"
        style="background-color: #be0000; flex: 8"
      ></view>
      <view
        class="line-height"
        style="background-color: #222222; flex: 2"
      ></view>
    </view>
    <view class="form-container">
      <u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
        <u-form-item
          :leftIconStyle="{ color: '#888', fontSize: '16px' }"
          left-icon="account"
          label-width="120"
          prop="name"
        >
          <u-input
            placeholder="请输入姓名"
            v-model="model.name"
            type="text"
          ></u-input>
        </u-form-item>

        <u-form-item
          :leftIconStyle="{ color: '#888', fontSize: '16px' }"
          prop="password"
          left-icon="lock"
        >
          <u-input
            :password-icon="true"
            type="password"
            v-model="model.password"
            placeholder="请输入密码"
          ></u-input>
        </u-form-item>
        <view class="row-line-between">
          <view class="primary-color">忘记密码</view>
          <u-form-item label-position="right" prop="remember">
            <u-checkbox
              slot="right"
              v-model="model.remember"
              @change="checkboxChange($event, 'remember')"
              shape="circle"
              >记住密码</u-checkbox
            >
          </u-form-item>
        </view>
      </u-form>
      <view
        class="col-line-center primary-color"
        style="font-size: 12px; margin-bottom: 8px"
      >
        <view class="row-line">
          <u-checkbox
            v-model="model.agreement"
            @change="checkboxChange($event, 'agreement')"
            icon-size="18"
            >我已阅读并接受该</u-checkbox
          >
          <view>《临e家隐私协议》</view>
        </view>
        <view>《临e家第三方SDK使用情况》</view>
      </view>

      <u-button @click="submit" shape="circle" type="primary" >登录</u-button>
      <view class="row-line-center" style="margin: 10px 0px"
        >没有账号？<view class="primary-color">点击注册</view></view
      >
      <view class="bottom">
        <u-loadmore status="nomore" :load-text="loadText" />
        <i class="iconfont iconweixin" style="font-size: 24px" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    let that = this;
    return {
      loadText: {
        nomore: "其他方式登录",
      },
	  buttonStyle:{
		 color:'#FDD00080'
	  },
      inputStyle: {
        backgroundColor: "#f8f8f8",
        padding: "10px",
        borderRadius: "8px",
      },
      model: {
        name: "",
        password: "",
        remember: true,
        agreement: false,
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["change", "blur"],
          },
          {
            // 正则不能含有两边的引号
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
            message: "需同时含有字母和数字，长度在6-12之间",
            trigger: ["change", "blur"],
          },
        ],
      },
      border: false,
      check: false,
      errorType: ["message"],
    };
  },
  onLoad() {},
  computed: {},
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    submit() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          if (!this.model.agreement) return this.$u.toast("请勾选协议");
          console.log("验证通过");
          this.$router.toPage("/pages/home", null, "tab");
        } else {
          console.log("验证失败");
        }
      });
    },
    // 勾选版权协议
    checkboxChange(e, type) {
      if (type == "remember") {
        this.model.remember = e.value;
      } else if (type == "agreement") {
        this.model.agreement = e.value;
      }

      console.log(this.model);
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  position: relative;
}
.top {
  width: 100%;
  height: 25%;
  background-color: $uni-color-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 50px;
  height: 80px;
}
.line-height {
  height: 4px;
}
.form-container {
  display: flex;
  flex-direction: column;
  height: calc(75% - 4px);
  padding: 32px;
  position: relative;
}
.u-form-item {
  background-color: #f8f8f8 !important;
  padding: 10px !important;
  border-radius: 8px !important;
}

.primary-color {
  color: $uni-color-primary;
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
