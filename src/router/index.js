import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
=======
import HomeView from '../views/HomeView'
>>>>>>> f1633970378b3d62489f41d85e8b8c36ac01b046

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
=======
>>>>>>> f1633970378b3d62489f41d85e8b8c36ac01b046
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

