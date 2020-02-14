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
      path: 'billTag',
      component: () => import('@/views/bill/billTag'),
      name: 'billTag',
      meta: { title: '账单标签管理' }
    },
    {
      path: 'billDashBord',
      component: () => import('@/views/bill/billDashBord'),
      name: 'billDashBord',
      meta: { title: '账单大盘' }
    }
  ]
}
export default billRouter
