import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TelaCadastro from '../views/TelaCadastro.vue'
import TelaPesquisa from '../views/TelaPesquisa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/telacadastro',
    name: 'TelaCadastro',
    component: TelaCadastro
  },
  {
    path: '/telapesquisa',
    name: 'TelaPesquisa',
    component: TelaPesquisa
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
