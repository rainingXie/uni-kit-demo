import * as savekey from './save-key.js'


//获取顶请求头
 export const getRequestHeader = function() {
	let headerDic = {
		'Content-Type': 'application/json'
	};
	let loginMes = uni.getStorageSync(savekey.LOGIN_MEG);
	if (loginMes) {
		let access_token = loginMes.tokenType + ' ' + loginMes.value;
		headerDic.Authorization = access_token;
	}
	return headerDic;
}
