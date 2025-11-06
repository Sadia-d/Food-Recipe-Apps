import React from 'react';
import { useLoaderData } from 'react-router';
import img from '../assets/dan-gold-4_jhDO54BYg-unsplash.jpg'

const Home = () => {

    const foodData = useLoaderData()
    console.log(foodData);


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
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Discover Delicious Meal</h1>
                        <p className="mb-5">
                            Search from thousands of recipes around the world
                        </p>
                        <div>
                            <form>
                                <input className='border py-1 w-80 rounded-l-xl'
                                type="search" name="search" id="" />
                                <button className='border bg-emerald-600 px-3 py-1 rounded-r-xl' >Search</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* banner section end */}
        </div>
    );
};

export default Home;