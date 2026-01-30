import { useTranslation } from "react-i18next"

export default function FavoriteItemCard({ item, children }) {

	const { t } = useTranslation()

	return (
		<div style={{
			background: '#0a0a0a',
			border: '1px solid #32ff7e',
			borderRadius: '12px',
			padding: '16px',
			margin: '12px 0',
			display: 'flex',
			alignItems: 'center',
			gap: '16px',
			color: '#fff',
			fontFamily: 'Orbitron, sans-serif',
			boxShadow: '0 0 12px rgba(50, 255, 126, 0.3)',}}>

			<img src={item.image || '/vite.svg'} alt={item.name}
			style={{
				width: '90px',
				height: '90px',
				objectFit: 'cover',
				borderRadius: '10px',
				border: '1px solid #32ff7e',}}/>
			
			<div style={{ flex: 1 }}>
				<div style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#fff' }}>
					{item.name}
				</div>

				<div style={{ fontSize: '0.95rem', color: '#ffeb3b' }}>
					{t('common.PRICE')}: {item.price} {t('common.CURRENCY')}
				</div>
			</div>

			{children}
		</div>
	)
}