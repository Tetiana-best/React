// const API_BASE = 'http://localhost:5000/api'
const API_BASE = import.meta.env.VITE_API_URL;

export default {
	productsList: `${API_BASE}/products`,
	getProductByCategory: (category) => `${API_BASE}/products/category/${category}`,
	getProductById: (id) => `${API_BASE}/products/${id}`
}