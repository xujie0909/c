import Layout from '@/layout'

const systemRouter = {
  path: '/bill',
  component: Layout,
  redirect: '/bill/billManager',
  name: 'bill',
  meta: {
    title: '账单管理',
    icon: 'bill'
  },
  children: [
    {
      path: 'dictionary',
      component: () => import('@/views/system'),
      name: 'dictionary',
      meta: { title: '账单详情' }
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
