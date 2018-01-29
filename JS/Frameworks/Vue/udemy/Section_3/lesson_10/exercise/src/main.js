import Vue from 'vue'
import App from './App.vue'
//import Header from './components/shared/Header.vue'
import Servers from './components/server/Servers.vue'
import ServerDetails from './components/server/ServerDetails.vue'
import Footer from './components/shared/Footer.vue'

//Vue.component('ex-header', Header);
Vue.component('ex-servers', Servers);
Vue.component('ex-server-details', ServerDetails);
Vue.component('ex-footer', Footer);

export const serverBus = new Vue({

});

new Vue({
  el: '#app',
  render: h => h(App)
})
