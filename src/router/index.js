import Vue from 'vue'
import VueRouter from 'vue-router'
const Manage = () => import('../views/manage/Manage')
const VisualizationPlatform = () => import('../views/visualizationPlatform/VisualizationPlatform')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Manage
  },
  {
    path: '/platform',
    component: VisualizationPlatform
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
