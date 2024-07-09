import React from 'react';
import { NavBar } from './FrontEnd/navBar/navBar.jsx';
import { LogIn } from './FrontEnd/LogInPage/LogIn.jsx'
import { SignUpPage } from './FrontEnd/SignupPage/SignUpPage.jsx';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Contact from './FrontEnd/Contact/index.jsx';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
// import { Product } from './FrontEnd/Product/product.jsx';
import  { UseProduct }  from './FrontEnd/Product/useProduct.jsx';
// import  ProductDetail from './FrontEnd/Product/ProductDetail.jsx';
import './index.css'
 
function App() {

  return (
    <>
    
    <BrowserRouter>
      <div>
        <Header></Header>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/product_detail ' element={<Product  />} /> */}
          <Route path='/product/use' element={<UseProduct />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
