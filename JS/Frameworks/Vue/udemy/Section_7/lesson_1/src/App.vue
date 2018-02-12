<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some Text'"></p><!--adds text in between tags-->
                <p v-html="'<strong>Some Text</strong>'"></p><!--adds html in between tags, could be security issue-->
            	
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'yellow'">Color This</p>
                <p v-highlight:background.delayed="'yellow'">Color This</p>
                <p v-highlight="'red'">Color This</p>
                <hr>
                <h2>Local Directives</h2>
                <p v-local-highlight:background.delayed="'red'">This is local directive</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: '500'}">This is local multi-directive that blinks</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	directives: {
    		'local-highlight': {
    			bind(el, binding, vnode) {
    				var delay = 0;
					if(binding.modifiers['delayed']) {
						delay = 1000;
					}
					if(binding.modifiers['blink']) {
						let mainColor = binding.value.mainColor;
						let secondColor = binding.value.secondColor;
						let currentColor = mainColor;
						setTimeout(() => {
							setInterval(() => {
								currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
							
								if(binding.arg == 'background') {
									el.style.backgroundColor = currentColor;
								} else {
									el.style.color = currentColor;
								}
							},binding.value.delay);
						}, delay);	

					} else {
						setTimeout(() => {
							if(binding.arg == 'background') {
								el.style.backgroundColor = binding.value.mainColor;
							} else {
								el.style.color = binding.value.mainColor;
							}
						}, delay);						
					}
    			}
    		}
    	}
    }
</script>

<style>

</style>
