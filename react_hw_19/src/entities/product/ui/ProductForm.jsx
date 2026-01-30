import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ProductForm({ product = {}, onSubmit }) {

	const { t } = useTranslation()

  const [name, setName] = useState(product?.name || '')
  const [price, setPrice] = useState(product?.price || 0)
  const [image, setImage] = useState(product?.image || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ ...product, name, price: Number(price), image })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0a0a0a] border border-[#32ff7e] rounded-xl p-6 flex flex-col gap-4 w-full max-w-md mx-auto shadow-lg text-white font-orbitron"
    >
      <input
        type="text"
        placeholder={t('common.NAME')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="px-3 py-2 rounded border border-[#32ff7e] bg-[#111] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#32ff7e]"
      />

      <input
        type="number"
        placeholder={t('common.PRICE')}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="px-3 py-2 rounded border border-[#32ff7e] bg-[#111] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#32ff7e]"
      />

      <input
        type="url"
        placeholder={t('common.IMAGE_URL')}
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="px-3 py-2 rounded border border-[#32ff7e] bg-[#111] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#32ff7e]"
      />

      <button
        type="submit"
        className="bg-[#32ff7e] text-black font-bold rounded px-4 py-2 hover:bg-green-400 transition"
      >
        {t('common.SAVE')}
      </button>
    </form>
  )
}
