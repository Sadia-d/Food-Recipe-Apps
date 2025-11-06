import { useLoaderData } from 'react-router';
import img from '../assets/dan-gold-4_jhDO54BYg-unsplash.jpg'
import Foods from './Foods';
import { useState } from 'react';


const Home = () => {

    const foodData = useLoaderData()
    const meals = foodData.meals || [];
    const [foods , setFoods]= useState(meals)

    const handleSearchFoods = (e) =>{
       e.preventDefault();
       const searchFoods = e.target.search.value;
      if(searchFoods){
            const searchResults = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchFoods.toLowerCase()))
            setFoods(searchResults)
      }
      else{
        setFoods(meals)
      }
        
    }
  

    return (
        <div className='mt-10 mb-10'>
            {/* banner section start */}
            <div
                className="hero h-[550px]"
                style={{
                    backgroundImage:
                        `url(${img})`,
                }}
            >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl  font-bold">Discover Delicious Meal</h1>
                        <p className="mb-5">
                            Search from thousands of recipes around the world
                        </p>
                        <div>
                            <form onSubmit={handleSearchFoods} >
                                <input className='border px-2 py-1 w-80 rounded-l-xl'
                                type="search" name="search" id="" />
                                <button className='border bg-emerald-600 px-3 py-1 rounded-r-xl' >Search</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* banner section end */}

           {/* meal-card-section start */}
           <div className='mt-14 grid grid-cols-3 gap-5 justify-items-center'>
            {
            foods.map(meal => <Foods
                key={meal.idMeal}
                 meal={meal}></Foods>)
            }
           </div>
           {/* meal-card-section end */}
        </div>
    );
};

export default Home;