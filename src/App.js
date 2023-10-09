import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderHome from'./components/HeaderHome';
import Footer from './components/Footer';
import Main from './pages/Main';
import Layout from './components/Layout';


function App() {
  return (
    // <Fragment>
    //   <HeaderHome />
    //   <Main />
    //   <Footer />
    // </Fragment>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
