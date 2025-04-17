import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Service from './Components/Service';
import Product from './Components/Product';
import More1 from './Components/More1';
import More2 from './Components/More2';
import More3 from './Components/More3';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/login'element={<Login/>} />
      <Route path='/service' element={<Service/>}/>
      <Route path=''element={<Product/>}/>
      <Route path='/product/more1'element={<More1/>}/>
      <Route path='/product/more2'element={<More2/>}/>
      <Route path='/product/more3'element={<More3/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
      
  );
}

export default App;

