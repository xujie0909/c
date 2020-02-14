import request from '@/utils/request'

//账单列表查询
export function fetchList(query) {
  return request({
    url: '/bill/list',
    method: 'get',
    params: query
  })
}

export function sourceProportion(chartType) {
  return request({
    url: '/bill/chart',
    method: 'get',
    params: chartType
  })
}

// 新增 修改
export function saveBillTag(data) {
  return request({
    url: '/tag/save',
    method: 'post',
    data
  })
}

//账单标签查询
export function tagList(query) {
  return request({
    url: '/tag/list',
    method: 'get',
    params: query
  })
}


