import PropTypes from 'prop-types';

import { NavLink as Link } from 'react-router-dom';

export const NavLink = (props) => {
    const { to, children } = props;

    return (
        <li>
            <Link to={to} style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}>
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
