import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import locale from 'element-ui/lib/locale/lang/pt-br'
Vue.use(ElementUI, { locale })

Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
