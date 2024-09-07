import React from 'react';

const Dynamicpage = ({ params }:{params: {slug: string}}) => {
    return (
        <div>
            return <div>My Post: {params.slug}</div>
        </div>
    );
};

export default Dynamicpage;