import React from 'react';

const Foods = ({ meal }) => {
    const { strMeal, strArea, strMealThumb, strCategory } = meal
    return (
        <div>
            <div className="card bg-base-100 w-[345px] shadow-sm">
                <figure>
                    <img className='h-48 w-full'
                        src={strMealThumb}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <div className='flex'>
                        <p>{strCategory}</p>
                        <p>{strArea}</p>

                    </div>
                    <div className="card-actions ">
                        <button className="btn bg-green-800 text-white">See deatils</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foods;