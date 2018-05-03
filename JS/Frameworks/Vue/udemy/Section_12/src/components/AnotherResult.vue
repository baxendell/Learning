<template>
	<div>
    	<p>Counter is: {{ doubleCounter }}</p>
    	<p>Nuber of Clicks: {{stringCounter}}</p>
	</div>
</template>

<script>
	import { mapGetters} from 'vuex';

    export default {
        computed: {
        	...mapGetters ([
	        	'doubleCounter',
	        	'stringCounter'
        	])
		}
    }
</script>