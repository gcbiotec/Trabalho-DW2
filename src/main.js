import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueTheMask)
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
