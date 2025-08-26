import '@/layouts/MainMenu.scss';
import { routes } from "@/router/router";
import { NavLink } from 'react-router-dom';

function MainMenu() {
  const menuRoutes = routes[0].children.filter(r => r.handler?.title);

  return ( 
    <nav>
      {menuRoutes.map((r, index) => (
        <li key={index}>
          <NavLink 
            to={r.path ?? ''} 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            {r.handler.title}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}

export default MainMenu;
