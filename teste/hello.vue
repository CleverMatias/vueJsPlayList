<template>
	<p>{{hello}}</p>
</template>
<script>
	export default {
		data() {
			return {
				hello: 'Hello from vue!'
			}
		}
	}
</script>
<style scoped>
	p{
		color: blue;
	}
</style>