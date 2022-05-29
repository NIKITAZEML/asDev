import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import AuthView from "@/views/AuthView"
import AccountView from "@/views/AccountView"
import TradeView from "@/views/TradeView"
import CourceView from "@/views/CourceView";
import Reg from "@/views/Reg"
import AllCoinsAuth from "@/views/AllCoinsAuth";

import AppHeader from '../components/AppHeader.vue'
import LoginHeader from '../components/LoginHeader.vue'
import DiagramView from "@/views/DiagramView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      layout: AppHeader
    }
  },

  {
    path: '/auth',
    name: 'AuthView',
    component: AuthView,
    meta: {
      layout: AppHeader
    }
  },

  {
    path: '/account',
    name: 'AccountView',
    component: AccountView,
    meta: {
      layout: LoginHeader
    }
  },
  {
    path: '/trade',
    name: 'TradeView',
    component: TradeView,
    meta: {
      layout: LoginHeader
    }
  },
  {
    path: '/cource',
    name: 'CourceView',
    component: CourceView,
    meta: {
      layout: AppHeader
    }
  },
  {
    path: '/reg',
    name: "reg",
    component: Reg,
    meta: {
      layout: AppHeader
    }
  },
  {
    path: '/allcoins',
    name: 'allcoins',
    component: AllCoinsAuth,
    meta: {
      layout: LoginHeader
    }
  },

  {
    path: '/diagram',
    name: 'DiagramView',
    component: DiagramView,
    meta: {
      layout: AppHeader
    }
  },
]

const router = new VueRouter({
  routes
})

export default router

