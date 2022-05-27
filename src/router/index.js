import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
]

const router = new VueRouter({
  routes
})

export default router

