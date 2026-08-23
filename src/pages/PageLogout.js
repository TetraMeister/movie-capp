import React from 'react';

import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export const PageLogout = () => {
    const { logOut } = useUser();

    React.useEffect(() => {
        logOut();
    }, []);

    return (
        <div>
            <Navigate to={'/'} />
        </div>
    );
};

export default PageLogout;
