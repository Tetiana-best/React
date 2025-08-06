export default{
	pages:{
		home: '/',
		teachers: {
			index: '/teachers',
			add: 'new',
			edit: ':id/edit',
			detail: ':id',
		},
		meeting:'/meeting',
		aboutApp: '/about-app',
		aboutDev: '/about-dev',
	},
	navigate: {
		home: '/',
		teachers: {
			index: '/teachers',
			add: '/teachers/new',
			getEditLink: (id) => `/teachers/${id}/edit`,
			getDetailLink: (id) => `/teachers/${id}`,
		},
		meeting:'/meeting',
		aboutApp: '/about-app',
		aboutDev: '/about-dev',
	}
}