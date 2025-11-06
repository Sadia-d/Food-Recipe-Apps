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
                  <Footer></Footer>
            </div>        
        </div>
    );
};

export default Rootlayout;