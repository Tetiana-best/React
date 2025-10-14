export const frontRoutes = {
	pages:{
		home:'/',
		dreams:{
			base:'dreams',
			detail:':id',
			edit:'edit/:id?',
			add: 'add'
		}
	},
		navigate:{
		dreams:{
			base:'/dreams',
			detail:(id) => `/dreams/${id}`,
			edit:(id) => `/dreams/edit/${id}`,
			add: '/dreams/edit',
		}
	},
}