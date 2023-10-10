import { Outlet } from 'react-router-dom';
import HeaderHome from './HeaderHome';
import Footer from './Footer';
import './Layout.css';

function LayoutHome() {
    return (
        <div className='wrapper'>
            <HeaderHome />
            <Outlet />
            <Footer />
        </div>
    );
}

export default LayoutHome;