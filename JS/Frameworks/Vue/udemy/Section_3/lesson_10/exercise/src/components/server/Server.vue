<template>
    <li @click="serverSelected" style="cursor: pointer" class="list-group-item">
        Server #{{ server.id }}
    </li>
</template>

<script>
	import {serverBus} from '../../main';

	export default {
		props: ['server'],
		methods: {
			serverSelected() {
				serverBus.$emit('serverSelected', this.server);
			}
		}
	}
</script>