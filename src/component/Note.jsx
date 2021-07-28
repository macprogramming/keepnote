import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";

const App = () =>{
  return(
    <>
     <div className="container">
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default App;