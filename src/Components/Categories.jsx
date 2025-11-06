import React from 'react';
import { useLoaderData } from 'react-router';
import Category from './Category';

const Categories = () => {

    const categoryData = useLoaderData();
    const categories = categoryData.categories || []
   

    return (
        <div className='mt-7 grid md:grid-cols-3 grid-cols-1 gap-6 mb-7'>
            {
                categories.map(category => <Category
                key={category.idCategory}
                category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;