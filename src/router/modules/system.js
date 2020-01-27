import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: '/system/dictionary',
  name: 'system',
  meta: {
    title: '系统设置',
    icon: 'setting'
  },
  children: [
    {
      path: 'dictionary',
      component: () => import('@/views/system'),
      name: 'dictionary',
      meta: { title: '字典表管理' }
    },
    {
      path: 'temp',
      component: () => import('@/views/system/temp'),
      name: 'xxx',
      meta: { title: '开发中' }
    }
  ]
}
export default systemRouter
