import Vue from 'vue'
import Router from 'vue-router'
// import LoginDashboard from '@/components/LoginDashboard'

const dashboardPage = () => import('@/components/DashboardPage')
const toolBar = () => import('@/components/Tool/ToolBar')
const topBar = () => import('@/components/Common/TopBar')
const LoginDashboard = () => import('@/components/LoginDashboard')

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
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: LoginDashboard
    }, {
      path: '*',
      redirect: '/login'
    }
  ]
})
