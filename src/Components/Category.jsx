import React from 'react';

const Category = ({ category }) => {
    const { strCategoryThumb ,strCategory,strCategoryDescription} = category
    return (
        <div className='mt-10'>
            <div className="card bg-base-100 w-96 shadow-lg">
                <figure>
                    <img
                        src={strCategoryThumb}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>
                    <p>{strCategoryDescription.slice(0,100)}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Category;