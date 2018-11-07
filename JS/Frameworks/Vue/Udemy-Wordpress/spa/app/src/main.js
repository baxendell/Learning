import Vue from 'vue'
import App from './App.vue'
import Nav from './globals/nav.vue'
import Footer from './globals/footer.vue'
import PostExcerpt from './posts/post-excerpt.vue'

Vue.component('app-main-nav', Nav);
Vue.component('app-main-footer', Footer);
Vue.component('app-post-excerpt', PostExcerpt);

new Vue({
  el: '#app',
  render: h => h(App),
  data: {

  }
})
