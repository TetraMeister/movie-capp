import React from 'react';

import { Navigate } from 'react-router-dom';

export const PageLogout = (params) => {
    const { onLogOut } = params;

    React.useEffect(() => {
        onLogOut();
    }, []);

    return (
        <div>
            <Navigate to={'/'} />
        </div>
    );
};

export default PageLogout;
