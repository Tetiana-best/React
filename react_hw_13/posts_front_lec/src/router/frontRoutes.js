export default {
pages: {
	home: "/",
	posts: {
			index: '/posts',
			add: 'new',
			edit: ':id/edit',
			detail: ':id',
		},
	postsInfinite: "posts-infinite",
	contacts: "contacts",
},
navigator: {
	home: "/",
		posts: {
			index: '/posts',
			add: '/posts/new',
			getEditLink: (id) => `/posts/${id}/edit`,
			getDetailLink: (id) => `/posts/${id}`,
		},
	postsInfinite: "posts-infinite",
	contacts: "contacts",
},
};