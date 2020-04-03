import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5239715e = () => interopDefault(import('../pages/data.vue' /* webpackChunkName: "pages/data" */))
const _ea530806 = () => interopDefault(import('../pages/update.vue' /* webpackChunkName: "pages/update" */))
const _45c81c64 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/data",
    component: _5239715e,
    name: "data"
  }, {
    path: "/update",
    component: _ea530806,
    name: "update"
  }, {
    path: "/",
    component: _45c81c64,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
