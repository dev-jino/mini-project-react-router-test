import { Outlet } from 'react-router-dom';
import Header from './HeaderHome';
import Footer from './Footer';
import './Layout.css';

function Layout() {
    return (
        <div className='wrapper'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;