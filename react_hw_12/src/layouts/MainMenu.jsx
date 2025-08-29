import { routes } from '@/router'
import { NavLink } from 'react-router'
import styles from './MainMenu.module.scss'

function MainMenu() {
  return (
    <nav>
      <ul className={styles.menu}>
        {routes[0].children.map((r, index) => (
          <li className={styles.menuItem} key={index}>
            <NavLink
              to={r.path ?? ''}
              className={({ isActive }) =>
                [
                  styles.link,
                  isActive ? styles.active : ''
                ].join(' ')
              }
            >
              {r.handler.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
