import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Rootlayout = () => {
   

    return (
        <div>
            <div className='flex min-h-screen flex-col'>
                <Navbar></Navbar>

               <main className='flex-grow'>
                    <Outlet></Outlet>
                </main>
                </div>
               
                <Footer></Footer>
            </div>
       
    );
};

export default Rootlayout;