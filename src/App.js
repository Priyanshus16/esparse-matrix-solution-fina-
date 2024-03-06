import Header from './component/Header';
import Footer from './component/Footer';
// import Footer1 from './component/Footer1';
import Home from './mainComponents/Home';
import Frame from './mainComponents/Frame';
import AboutUs from './mainComponents/AboutUs';
import Home3Comp from './component/Home3Comp';
// import Aboutus2comp from './component/Aboutus2comp';
import Career from './mainComponents/Career';
import Contactus from './mainComponents/ContactUs';
import GetinTouchForm from './component/GetinTouchForm';
import Blog from './mainComponents/Blog';
import Services1 from './mainComponents/Services1';
import Services2 from './mainComponents/Services2';
import Services3 from './mainComponents/Services3';
import Services4 from './mainComponents/Services4';
import Services5 from './mainComponents/Services5';
import Services6 from './mainComponents/Services6';
import Services7 from './mainComponents/Services7';
import Services8 from './mainComponents/Services8';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import './mainComponents/home.css'
import './mainComponents/Frame.css'
import './mainComponents/AboutUs.css'
import './mainComponents/Career.css'
import './mainComponents/ContactUs.css'
import './mainComponents/Blog.css'
import './mainComponents/Services1.css'
import './mainComponents/Services2.css'
import './mainComponents/Services3.css'
import './mainComponents/Services4.css'
import './mainComponents/Services5.css'
import './mainComponents/Services6.css'
import './mainComponents/Services7.css'
import './mainComponents/Services8.css'
import './App.css';
import React from 'react';
import Home5Comp from './component/Home5Comp';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/Header' element = {<Header/>}/>
          <Route exact path='/Footer' element = {<Footer/>}/>
          <Route exact path='/Frame' element = {<Frame/>}/>
          <Route exact path='/About' element = {<AboutUs/>}/>
          <Route exact path='/Home3Comp' element = {<Home3Comp/>}/>
          <Route exact path='/GetinTouchForm' element = {<GetinTouchForm/>}/>
          <Route exact path='/Career' element = {<Career/>}/>
          <Route exact path='/Contactus' element = {<Contactus/>}/>
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/services1' element={<Services1 />} />
          <Route exact path='/services2' element={<Services2 />} />
          <Route exact path='/services3' element={<Services3 />} />
          <Route exact path='/services4' element={<Services4 />} />
          <Route exact path='/services5' element={<Services5 />} />
          <Route exact path='/services6' element={<Services6 />} />
          <Route exact path='/services7' element={<Services7 />} />
          <Route exact path='/services8' element={<Services8 />} />
          <Route exact path='/home5' element={<Home5Comp/>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
