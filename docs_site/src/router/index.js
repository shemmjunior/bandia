import Vue from 'vue'
import VueRouter from 'vue-router'
import Playground from '../views/Playground.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Playground',
    component: Playground
  },
  {
    path: '/docs',
    name: 'Docs',
    component: function () {
      return import('../views/Docs.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
