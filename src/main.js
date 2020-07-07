import Vue from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import VueMeta from 'vue-meta';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
Vue.config.productionTip = false;

// Use plugins by calling the Vue.use() global method. This has to be done before you start your app by calling new Vue()
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

document.title = '𝓐 𝓞 𝓣 𝓟';
Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);
