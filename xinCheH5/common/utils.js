// const baseUrl = 'http://192.168.0.222:8083/xinche';
const baseUrl = 'http://47.105.165.101:9090/xinche_pc';
// const baseUrl = 'http://192.168.0.250:2081/xinche_pc';
// const baseUrl = 'http://192.168.0.254:8383/xinche';
// const baseUrl = 'http://192.168.0.254:8484/xinche';
// 封账ajax请求
const request = (url,params,type) => {
	let reType = type || 'POST'
	let token = uni.getStorageSync('token') || {}
	return new Promise((reslove,reject) => {
		uni.request({
			url:baseUrl + url,
			method: reType,
			data:params,
			dataType:'json',
			header:{'Authentication':token},
			success: (resData) => {
				if(resData.statusCode != 200){
					toast('请求失败,网络错误');
					reject(new Error())
				}else{
					let res = resData.data;
					if(res.code === 401){
						toast('身份已过期');
						reject(new Error(res.message))
					}else if(res.code === 200){
						reslove(res)
					}else{
						toast(res.message)
						reject(new Error(res.message))
					}
				}
			}
		})
	})
}
// 封装弹窗
const toast = (msg) => {
	uni.showToast({
		title:msg,
		icon:'none',
		position:'bottom',
		mask:false
	})
}
// 封装页面跳转
const goWindow = (url) => {
	uni.navigateTo({url: url})
}
// 封装加载模块
const loading = () => {
	uni.showLoading({
		title:'加载中...',
		mask:true
	})
}
// 导出封装事件
module.exports = {
	request,
	toast,
	goWindow,
	loading
}