import { useGetProductByIdQuery } from '@/entities/product/api/productApi'
import { ProductAddForm, ProductEditForm } from '@/features/products'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router'

export default function ProductEditPage() {
	const { t } = useTranslation()

  const { id } = useParams()
  const navigate = useNavigate()
  const { data: product, isLoading } = useGetProductByIdQuery(id, { skip: !id })

  const handleSuccess = () => {
    navigate(frontRoutes.pages.ProductsPage.navigationPath)
  }

  if (isLoading && id) return <div>{t('common.LOADING')}</div>

  return (
    <div className="max-w-md mx-auto p-6 bg-[#0a0a0a] rounded-xl shadow-lg text-white font-orbitron">
      <h1 className="text-2xl font-bold mb-4">{id ? t('ProductEditPage.title') : t('ProductAddPage.title')}</h1>
      {id ? (
        <ProductEditForm product={product} onSuccess={handleSuccess} />
      ) : (
        <ProductAddForm onSuccess={handleSuccess} />
      )}
    </div>
  )
}
