/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layouts
import LayoutBackend from '@/layouts/variations/Backend.vue'

// Register Vue Router
Vue.use(Router)

// Backend: General
const Entregas = () => import("@/views/proceso/Entregas.vue")
const Productos = () => import("@/views/proceso/Productos.vue")

// Router Configuration
export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/entregas',
      component: LayoutBackend,
      children: [
        {
          path: 'entregas',
          name: 'Registra entregas',
          component: Entregas
        },
        {
          path: 'productos',
          name: 'Registra productos',
          component: Productos
        },
      ]
    }
  ]
})
