import React from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext();

export const useUser = () => {
    return React.useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(
        localStorage.getItem('isUserLoggedIn') === 'true'
    );

    const logOut = React.useCallback(() => {
        setIsUserLoggedIn(false);
    }, []);

    const logIn = React.useCallback(() => {
        setIsUserLoggedIn(true);
    }, []);

    React.useEffect(() => {
        if (isUserLoggedIn) {
            localStorage.setItem('isUserLoggedIn', 'true');
        } else {
            localStorage.removeItem('isUserLoggedIn');
        }
    }, [isUserLoggedIn]);
    return (
        <UserContext.Provider value={{ isUserLoggedIn, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node,
};

export default UserContextProvider;
