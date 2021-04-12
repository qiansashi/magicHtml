import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const dashboardPage = () => import('@/components/DashboardPage')
const toolBar = () => import('@/components/Tool/ToolBar')
const topBar = () => import('@/components/Common/TopBar')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboardPage',
      component: dashboardPage,
      children: [
        {
          path: 'topBar',
          name: 'topBar',
          component: topBar
        },
        {
          path: 'toolBar',
          name: 'toolBar',
          component: toolBar
        },
        {
          path: 'helloworld',
          name: 'helloworld',
          component: HelloWorld
        }
      ]
    }
  ]
})
