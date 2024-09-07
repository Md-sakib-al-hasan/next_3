import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <h1>Header</h1>
            {children}
            <h2>Fotter</h2>
        </div>
    );
};

export default Layout;