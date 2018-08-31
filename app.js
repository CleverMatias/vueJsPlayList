new Vue({
	el: '#vue-app',
	data: {
		title: 'Matias Web Dev',
		name: 'Cleverson'
	},
	methods: {
		greeting (time) {
			return 'Olá ' + this.name + ' , boa ' + time + '.'
		}
	}
});