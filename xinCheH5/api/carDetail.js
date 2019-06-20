import { request } from '@/common/utils.js'
// 获取车辆信息
export const get_cars_detail_info = (params) => request('/car/findCarById',params)