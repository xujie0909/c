import Layout from '@/layout'

const billRouter = {
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
      path: 'billManager',
      component: () => import('@/views/bill/billManager'),
      name: 'billDetail',
      meta: { title: '账单详情' }
    },
    {
      path: 'temp',
      component: () => import('@/views/bill/temp'),
      name: 'billTemp',
      meta: { title: '开发中' }
    }
  ]
}
export default billRouter
