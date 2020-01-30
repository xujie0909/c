import request from '@/utils/request'

// 列表查询
export function fetchList(query) {
  return request({
    url: '/dictionary/list',
    method: 'get',
    params: query
  })
}

// 新增 修改
export function editDictionary(data) {
  return request({
    url: '/dictionary/edit',
    method: 'post',
    data
  })
}

// 删除数据
export function del(data) {
  return request({
    url: '/dictionary/delete',
    method: 'post',
    data
  })
}

// 获取所有字典分类
export function fetchDicTypes() {
  return request({
    url: '/dictionary/dicTypes',
    method: 'get',
  })
}

