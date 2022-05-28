import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import AuthView from "@/views/AuthView"
import AccountView from "@/views/AccountView"
import TradeView from "@/views/TradeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/auth',
    name: 'AuthView',
    component: AuthView
  },

  {
    path: '/account',
    name: 'AccountView',
    component: AccountView
  },
  {
    path: '/trade',
    name: 'TradeView',
    component: TradeView
  },
]

const router = new VueRouter({
  routes
})

export default router

