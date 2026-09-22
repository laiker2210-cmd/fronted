import { useState } from 'react';
import './Nav.css';

function Nav(props) {
    const { links } = props;
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="nav container">
            <button
                className={`nav__burger ${isOpen ? 'nav__burger--open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-list ${isOpen ? 'nav-list--open' : ''}`}>
                {links.map(link => (
                    <li key={link.href}>
                        <a href={link.href} onClick={closeMenu}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <button className="nav-svaz">Связаться</button>
        </nav>
    );
}

export default Nav;