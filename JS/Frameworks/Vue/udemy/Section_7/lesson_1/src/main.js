import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
	bind(el, binding, vnode) {
		//el.style.backgroundColor = 'green';
		//el.style.backgroundColor = binding.value; //Allows to set value
		var delay = 0;
		if(binding.modifiers['delayed']) {
			delay = 1000;
		}
		setTimeout(() => {
			if(binding.arg == 'background') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, delay);
	}
}); //v-highlight

new Vue({
  el: '#app',
  render: h => h(App)
})


/*
Hooks:
 - bind (el, bind, vnode): once directive is attached
 - inserted (el, binding, vnode): inserted into parent node
 - update(el, binding, vnode, oldVnode): Once component is updated
 - componentUpdated(el, binding, vnode, oldVnode): Once component is Updated(with children)
 - unbind(el, binding,vnode): Once directed is removed

 */
