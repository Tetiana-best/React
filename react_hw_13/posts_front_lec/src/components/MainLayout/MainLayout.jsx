import { Outlet } from 'react-router'
import styles from './MainLayout.module.scss'
import MainMenu from './MainMenu'

const MainLayout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <header className={styles.header}>
        <h1>React + RTK Query додаток</h1>
        <MainMenu />
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        © React RTK Query App
      </footer>
    </div>
  )
}

export default MainLayout
