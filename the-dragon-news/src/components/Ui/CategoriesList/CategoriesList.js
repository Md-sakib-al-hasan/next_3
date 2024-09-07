import { getALLCategories } from '@/Utils/getLLCategories';
import React from 'react';

const CategoriesList =async () => {
     const data = getALLCategories();
     console.log(data)
    return (
        <div>
            <h1>Category lsit</h1>
        </div>
    );
};

export default CategoriesList;