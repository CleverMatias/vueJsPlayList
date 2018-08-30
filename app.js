new Vue({
	el: '#vue-app',
	data: {
		name: 'Cleverson',
		title: 'The Net Ninja'
	},
	methods: {
		greeting (time) {
			return 'Olá ' + this.name + ' , boa ' + time + '.'
		}
	}
});