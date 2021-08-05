import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tentangsaya from '../views/Tentangsaya.vue'
import HalamanPendidikan from '../views/HalamanPendidikan.vue'
import PengalamanKerja from '../views/PengalamanKerja.vue'
import contactme from '../views/contactme.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Tentangsaya',
    name: 'Tentangsaya',
    component: Tentangsaya
  },
  {
    path: '/HalamanPendidikan',
    name: 'HalamanPendidikan',
    component: HalamanPendidikan
  },
  {
    path: '/PengalamanKerja',
    name: 'PengalamanKerja',
    component: PengalamanKerja
  },
  {
    path: '/contactme',
    name: 'contactme',
    component: contactme
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
