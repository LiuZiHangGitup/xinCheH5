import { request } from '@/common/utils.js'
// 获取微店车辆列表
const getCarList = (params) => request('/car/getCarVdian',params)
// 获取品牌 /carBrand/SELECT_BRAND_ALL
const getBrand = () => request('/carBrand/selectByAll',{})
// 获取车系
const getXinCheXings = (params) => request('/carAudi/selectByBrandId',params)
// 获取指定车系下的所有车型 
const getSelectByAudiId = (params) => request('/carType/selectByAudiId', params)
// 导出封装事件
module.exports = {
	getCarList,
	getBrand,
	getXinCheXings,
	getSelectByAudiId
}