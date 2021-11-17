import  route  from "uview-ui/libs/function/route.js"

/**
 * path:跳转页面路径
 * param：携带参数
 * encode：是否转码（特殊字符或数据较长）
 * type：跳转类型navigateTo/to、redirect/redirectTo、switchTab/tab、reLaunch   其分別对应uni的路由跳转
 */
const toPage = (path,params = {},type="navigateTo",encode = true,animationDuration = 300) => {
	route({
		type:type,
		url:path,
		params:encode?{
			data:encodeURIComponent(JSON.stringify(params))
		}:params,
		animationDuration:animationDuration
	})
}
/**
 * delta:返回的页面数
 * animationDuration:动画持续时间，单位ms
 */
const backPage = (delta = 1,animationDuration = 300) => {
	route({
		type:"navigateBack",
		delta:delta,
		animationDuration:animationDuration
	})
}
/**
 * param:传递参数
 * decode：是否解码,必须转码才能解码
 */
const getParams=(param,decode=true)=>{
	return param?(decode?JSON.parse(decodeURIComponent(param.data)):param):null
}


export default {
	toPage,
	backPage,
	getParams
	
}
