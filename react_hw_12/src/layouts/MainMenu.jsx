import { routes } from '@/router';
import { NavLink } from 'react-router';
import styles from './MainMenu.module.scss';

function MainMenu() {
	const menuRoutes = routes[0].children.filter(r => r.handler?.title);
	
  return (
    <nav>
      <ul className={styles.menu}>
        {menuRoutes.map((r, index) => (
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
