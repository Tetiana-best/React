export const frontRoutes = {
	pages:{
		home:'/',
		patients:{
			base:'patients',
			detail:':id',
			edit:'edit/:id?'
		},
		doctors:{
			base:'doctors',
			edit:'edit/:id?'
		},
		appointments:{
			base:'appointments',
			edit:'edit/:id?'
		},
	},
	navigate: {
		patients:{
			base:'/patients',
			getById: (id) => `/patients/${id}`,
			edit:(id) => `/patients/edit/${id}`,
			create: '/patients/edit',
		},
		doctors:{
			base:'/doctors',
			getById: (id) => `/doctors/${id}`,
			edit:(id) => `/doctors/edit/${id}`,
			create: '/doctors/edit',
		},
		appointments:{
			base:'/appointments',
			getById: (id) => `/appointments/${id}`,
			edit:(id) => `/appointments/edit/${id}`,
			create: '/appointments/edit',
		},
	}
}