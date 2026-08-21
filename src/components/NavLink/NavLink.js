import PropTypes from 'prop-types';

import styles from './NavLink.module.css';

import { NavLink as Link } from 'react-router-dom';

export const NavLink = (props) => {
    const { to, children } = props;

    return (
        <li className={styles.liEl}>
            <Link
                to={to}
                style={({ isActive }) => ({
                    fontWeight: isActive ? 700 : 400,
                    textDecoration: 'none',
                    fontSize: 'larger',
                })}
            >
                {children}
            </Link>
        </li>
    );
};

NavLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
};

export default NavLink;
