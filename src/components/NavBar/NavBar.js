import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { ReactComponent as BurgerIcon } from '../../assets/burger-menu-svgrepo-com.svg';

import styles from './NavBar.module.css';

export const NavBar = (props) => {
    const { children } = props;

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = React.useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [setIsOpen]);

    const closeMenu = React.useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const handleUlClick = (e) => {
        if (e.target.closest('a')) {
            closeMenu();
        }
    };

    return (
        <nav className={styles.nav}>
            <Link to={'/'} className={styles.brand} onClick={closeMenu}>
                🎬 Movie Capp
            </Link>
            <button
                type="button"
                className={styles.burger}
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isOpen}
            >
                <BurgerIcon />
            </button>
            <ul
                className={`${isOpen ? styles.open : ''} ${styles.ulNavBar}`}
                onClick={handleUlClick}
            >
                {children}
            </ul>
            {isOpen && <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />}
        </nav>
    );
};

NavBar.propTypes = {
    children: PropTypes.node,
};

export default NavBar;
