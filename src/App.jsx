import './App.css'
import Header from './Header';
import Section from './Section'; 
import Modal from './Modal';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShowPaymentHistory from './ShowPaymentHistory';



function App() {


  return (
    <>
<BrowserRouter>
  <Header/>
  <Section />
  
</BrowserRouter>


 
    </>
  )
  
}

export default App;
