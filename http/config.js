import * as urlConst from './url-const.js';
import * as util from '@/utils/util.js';
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: urlConst.BASE_URL,
		showLoading: true, // 是否显示请求中的loading
		loadingText: '请求中...', // 请求loading中的文字提示
		loadingTime: 100, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		originalData: false, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 配置请求头信息
		// header:util.getRequestHeader()
	});
	// 请求拦截部分，如配置，每次请求前都会执行
	Vue.prototype.$u.http.interceptor.request = (config) => {
		if(config.url.indexOf(urlConst.LOGIN_URL)!=-1){
			
		}else{
			config.header = util.getRequestHeader();
		}
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	};

	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		console.log('response');
		console.log(res);
		if (!res.error) {//返回正常数据
			// res为服务端返回值，可能有code，result等字段
			// 这里对res.result进行返回，将会在this.$api.post(url).then(res => {})的then回调中的res的到
			// 如果配置了originalData为true，请留意这里的返回值
			return res.data;
		} else if (res.code == 201) {//token失效
			// 假设201为token失效，这里跳转登录
			vm.$u.toast('验证失败，请重新登录');
			setTimeout(() => {
				// 此为uView的方法，详见路由相关文档
				vm.$u.route('/pages/login');
			}, 1500);
			return false;
		} else {
			vm.$u.toast(res.errMsg)
			// 如果返回false，则会调用Promise的reject回调，
			// 并将进入this.$api.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			return false;
		}
	};
};
export default {
	install
};
