new Vue({
	el: '#vue-app',
	data: {
		name: 'Cleverson',
		title: 'The Net Ninja',
		website: 'https://www.facebook.com/cleverson.matias.7'
	},
	methods: {
		greeting (time) {
			return 'Olá ' + this.name + ' , boa ' + time + '.'
		}
	}
});

var ourDog = {
	"name": 'bob'
};

delete ourDog.name;
console.log(ourDog.name);