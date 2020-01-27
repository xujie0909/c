import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/permission/userToken',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/permission/userInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
