import http from "uview-ui/libs/request/index.js"

const getMethod = (url, param) => {
	return http.get(url, {
		...param
	});
}
const postMethod = (url, param) => {
	return http.post(url, {
		...param
	});
}
const putMethod = (url, param) => {
	return http.put(url, {
		...param
	});
}
const deleteMethod = (url, param) => {
	return http.delete(url, {
		...param
	});
}

export default {
	getMethod,
	postMethod,
	putMethod,
	deleteMethod
}
