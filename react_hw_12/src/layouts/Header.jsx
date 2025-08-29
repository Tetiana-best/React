import MainMenu from './MainMenu'

function Header() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center"
      style={{
        background: 'rgba(24, 26, 32, 0.92)',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.22), 0 1.5px 4px 0 rgba(0,0,0,0.10)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid #23272f',
		  marginBlockEnd:'20px',
      }}
    >
      <MainMenu />
    </div>
  )
}

export default Header
