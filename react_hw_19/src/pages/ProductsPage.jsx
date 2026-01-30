import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import ProductAddButton from '../features/products/product-add/ui/ProductAddButton'
import ProductsList from '../widgets/ProductsList/ProductsList'

export default function ProductsPage() {

	const { t } = useTranslation()

  const user = useSelector((state) => state.auth.user)
  const role = user?.role

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-2 sm:px-0">
      <div className="max-w-3xl mx-auto bg-[#0a0a0a] rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-white tracking-tight font-orbitron">
          {t('ProductsPage.title')}
        </h1>
        {(role === 'admin' || role === 'manager') && (
          <div className="flex flex-col items-center mb-8">
            <ProductAddButton />
          </div>
        )}
        <ProductsList user={user} role={role} />
      </div>
    </div>
  )
}
