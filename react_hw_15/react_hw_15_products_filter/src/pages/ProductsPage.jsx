// === src/pages/ProductsPage/ui.jsx ===
import { useGetProductsQuery } from '@/entities/product'; // Шлях до productApi в entities
import { useEffect, useState } from 'react';

// Імпортуємо наш віджет ProductList
import { ProductList } from '@/widgets/ProductListWidget/ProductList';

// Імпортуємо нову кнопку з фічі add-product
import { AddProductButton } from '@/features/product/add-product';
import { FilterProduct, useFilterProduct } from '@/features/product/filter-product';

export default function ProductsPage() {
  const [page, setPage] = useState(1)
  const [cursors, setCursors] = useState([])
  const perPage = 6

  // Логіка запиту даних
  const {searchTerm, handleSearch} = useFilterProduct()
  const { data, isLoading } = useGetProductsQuery({ page, perPage, cursors, searchTerm })
  const products = data?.data || []
  const hasMore = data?.hasMore

  // Логіка для курсорів та зменшення сторінки при порожньому результаті
  useEffect(() => {
    if (data?.cursor && cursors.length < page) {
      setCursors((prev) => [...prev, data.cursor])
    }
    if (data?.data.length === 0 && page > 1) {
      setPage((p) => p - 1)
    }
  }, [data, cursors?.length, page])

	useEffect(() => {
	setCursors([])
	setPage(1)
	}, [searchTerm])


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Products List</h2>
        {/* Використовуємо кнопку з фічі */}
			<AddProductButton />
			<FilterProduct searchTerm={searchTerm} handleSearch={handleSearch}/>
      </div>

      <ProductList
        products={products}
        page={page}
        setPage={setPage}
        hasMore={hasMore}
        isLoading={isLoading}/>
    </div>
  )
}
