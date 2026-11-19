import React from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext();

export const useUser = () => {
    return React.useContext(UserContext);
};

const USER_NAME_KEY = 'userName';

export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = React.useState(() => localStorage.getItem(USER_NAME_KEY));

    const isUserLoggedIn = Boolean(userName);

    const logOut = React.useCallback(() => {
        setUserName(null);
    }, []);

    const logIn = React.useCallback((name) => {
        setUserName(name);
    }, []);

    React.useEffect(() => {
        if (userName) {
            localStorage.setItem(USER_NAME_KEY, userName);
        } else {
            localStorage.removeItem(USER_NAME_KEY);
        }
    }, [userName]);

    const value = React.useMemo(
        () => ({ isUserLoggedIn, userName, logIn, logOut }),
        [isUserLoggedIn, userName, logIn, logOut]
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
    children: PropTypes.node,
};

export default UserContextProvider;
