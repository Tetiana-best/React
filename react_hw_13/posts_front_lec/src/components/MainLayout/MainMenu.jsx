import { pagesRoutes } from '@/router/routes'
import { NavLink } from 'react-router'
import styles from './MainMenu.module.scss'

const MainMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        {pagesRoutes
          .filter((route) => !route.meta?.notInMenu)
          .map(({ path, meta }) => (
            <li key={path} className={styles.menuItem}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {meta.icon} {meta.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default MainMenu
