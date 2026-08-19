import PropTypes from 'prop-types';

export const NavBar = (props) => {
    const { children } = props;

    return (
        <nav>
            <ul>{children}</ul>
        </nav>
    );
};

NavBar.propTypes = {
    children: PropTypes.node,
};

export default NavBar;
