import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header';
import Products from './components/Products/Products';
import Footer from './components/UI/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
