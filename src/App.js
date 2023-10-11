import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderHome from'./components/HeaderHome';
import Footer from './components/Footer';
import Main from './pages/Main';
import LayoutHome from './components/LayoutHome';
import Layout from './components/Layout';
import ItemDetail from './pages/ItemDetail';
// import OrderCheck from './pages/OrderCheck';
import Order from './pages/Order';


function App() {
  return (
    // <Fragment>
    //   <HeaderHome />
    //   <Main />
    //   <Footer />
    // </Fragment>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutHome />}>
          <Route path='/' element={<Main />}/>
        </Route>
        <Route element={<Layout />}>
          <Route path='/item-detail' element={<ItemDetail />}/>
          {/* <Route path='/order-check' element={<OrderCheck />}/> */}
          <Route path='/order' element={<Order />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
