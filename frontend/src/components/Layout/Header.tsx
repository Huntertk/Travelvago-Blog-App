import { NavLink } from 'react-router-dom';
import '../../styles/header.scss';

const Header = () => {
  return (
    <header>
        <div className="header_main_container">
            <div className="logo_component">
                <img src="/assets/images/tgvlogo.png" alt="Travelvago" />
            </div>
            <ul className="nav_links_container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to="/about">About</NavLink>
            </ul>
        </div>
    </header>
  )
}

export default Header