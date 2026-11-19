import React from 'react';

import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export const PageLogout = () => {
    const { logOut } = useUser();

    React.useEffect(() => {
        logOut();
    }, [logOut]);

    return <Navigate to={'/'} replace />;
};

export default PageLogout;
