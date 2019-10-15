import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'

import config from './config/keys'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$config = config;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
