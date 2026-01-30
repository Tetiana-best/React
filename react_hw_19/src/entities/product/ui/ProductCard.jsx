import { useTranslation } from "react-i18next"

export default function ProductCard({ product, children }) {

	const { t } = useTranslation()

  return (
    <div className="bg-[#0a0a0a] border border-[#32ff7e] rounded-xl shadow-lg p-4 flex flex-col items-center gap-2 w-full max-w-[180px] mx-auto relative font-orbitron text-white hover:shadow-2xl transition">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-contain rounded border border-[#32ff7e] bg-[#111]"
        />
      )}
      <h3 className="text-sm font-bold text-center w-full truncate">
        {product.name}
      </h3>
      <div className="text-yellow-400 font-semibold text-xs">
        {product.price} {t('common.CURRENCY')}
      </div>
      {product.ownerName && (
        <div className="text-slate-400 text-xs">
           {t('common.OWNER')}: {product.ownerName || product.ownerId}
        </div>
      )}
      {children && (
        <div className="flex flex-nowrap gap-2 mt-2 w-full justify-center">
          {children}
        </div>
      )}
    </div>
  )
}
