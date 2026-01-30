import { useTranslation } from "react-i18next"

function GlobalErrorPage() {
	const { t } = useTranslation()

  return <div>{t('GlobalErrorPage.title')}</div>
}

export default GlobalErrorPage
