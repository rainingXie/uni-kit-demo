import Vue from 'vue'
import App from './App'
import i18n from '@/utils/i18n/i18n'
import httpMethod from '@/http/http-method.js';
import router from '@/router/router.js';
import api from '@/http/api.js';
import * as savekey from '@/utils/save-key.js'
import * as utils from '@/utils/util.js'
import myComponent from '@/components/my-components.vue'
//注册uView
import uView from "uview-ui";
Vue.use(uView);

Vue.component('myComponent', myComponent)


Vue.config.productionTip = false
App.mpType = 'app'
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n
// 抽离请求方法，以免后续当前方法不满足更换
Vue.prototype.$httpMethod = httpMethod
// http接口API抽离，免于写url或者一些固定的参数
Vue.prototype.$api = api
//跳转路由
Vue.prototype.$router = router
//存储key
Vue.prototype.$savekey = savekey
//工具类
Vue.prototype.$utils = utils

const app = new Vue({
	...App,
	i18n,
})
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpConfig from '@/http/config.js';
Vue.use(httpConfig, app);

app.$mount();
