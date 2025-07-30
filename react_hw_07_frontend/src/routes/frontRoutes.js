export default {
		pages: {
			home: '/',
			shop: {
				index: '/shop',
				productsList: 'category/:category',
				productDetail: 'product/:id',
			},
			payment: '/payment',
			contacts: '/contacts',
			page404: '*',
	},
	 	navigate: {
			home:'/',
				shop: {
					index: '/shop',
					category: (category) => `/shop/category/${category}`,
					productDetail: (id) => `/shop/product/${id}`,
			},
				payment: '/payment',
				contacts: '/contacts',
	},
}