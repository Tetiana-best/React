import { MainMenu } from './MainMenu'
import { UserInfo } from './UserInfo'

export function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px',
		  margin: '10px 20px',
        borderBottom: '1px solid #ccc',
        backgroundColor: 'black',
		  borderRadius: '5px',
      }}
    >
      <MainMenu />
      <UserInfo />
    </header>
  )
}
