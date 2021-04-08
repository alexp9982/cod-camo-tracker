import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: '404 - Page Not Found',
    component: NotFound
  },
  /*{
    path: '/bocw',
    name: 'Black Ops Cold War',
    component: () => import(/!* webpackChunkName: "ultra" *!/ '../views/bocw.vue')
  },
  {
    path: '/mw2019',
    name: 'Modern Warfare 2019',
    component: () => import(/!* webpackChunkName: "aether" *!/ '../views/mw2019.vue')
  },*/
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
/*{
    path: '/settings',
    name: 'Settings',
    component: () => import(/!* webpackChunkName: "settings" *!/ '../views/Settings.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router