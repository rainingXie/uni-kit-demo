
// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
import * as urlConst from './url-const.js'
import http from "./http-method.js"

//登录
const login = (params) =>{
	return  http.postMethod(urlConst.LOGIN_URL, params)
};


export default{
	login
}









