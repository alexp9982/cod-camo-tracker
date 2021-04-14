import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  /*
  URL Route Template

  {
    path: '',
    name: '',
    component: () => import(/!* webpackChunkName: "" *!/ '../views/.vue')
  },
  */
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
  {
    path: '/bocw',
    name: 'Black Ops Cold War',
    component: () => import(/* webpackChunkName: "bocw" */ '../views/bocw.vue')
  },
  {
    path: '/mw2019',
    name: 'Modern Warfare 2019',
    component: () => import(/* webpackChunkName: "mw2019" */ '../views/mw2019.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  },
  {
    path: '/bocw/dmultra',
    name: 'Dark Matter Ultra',
    component: () => import(/* webpackChunkName: "dmultra" */ '../views/bocw/dmultra.vue')
  },
  {
    path: '/bocw/darkaether',
    name: 'Dark Aether',
    component: () => import(/* webpackChunkName: "darkaether" */ '../views/bocw/darkaether.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router