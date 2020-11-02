import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TelaCadastro from '../views/TelaCadastro.vue'
import TelaPesquisa from '../views/TelaPesquisa.vue'
import TelaEditar from '../views/TelaEditar.vue'
import TelaEditarVet from '../views/TelaEditarVet.vue'
import TelaPesquisaVet from '../views/TelaPesquisaVet.vue'
import TelaCadastroVet from '../views/TelaCadastroVet.vue'

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
    path: '/telacadastroVet',
    name: 'TelaCadastroVet',
    component: TelaCadastroVet
  },
  {
    path: '/telapesquisaVet',
    name: 'TelaPesquisaVet',
    component: TelaPesquisaVet
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
  },
  {
    path: '/telaeditarVet/:id',
    name: 'TelaEditarVet',
    component: TelaEditarVet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
