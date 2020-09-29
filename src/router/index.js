import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TelaCadastro from '../views/TelaCadastro.vue'
import TelaPesquisa from '../views/TelaPesquisa.vue'
import TelaEditar from '../views/TelaEditar.vue'


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
  },
  {
    path: '/telaeditar/:id',
    name: 'TelaEditar',
    component: TelaEditar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
