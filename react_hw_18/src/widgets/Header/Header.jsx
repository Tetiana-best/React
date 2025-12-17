import { MainMenu } from './MainMenu'
import { UserInfo } from './UserInfo'

import LanguageSwitcher from '@/shared/ui/LanguageSwitcher/LanguageSwitcher'

export default function Header() {
  return (
    <header style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <MainMenu />
      <UserInfo />

		<LanguageSwitcher />
    </header>
  )
}
