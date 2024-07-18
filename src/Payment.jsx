import React from 'react'
import "./Payment.css"
import {Link, Routes,Route, Outlet } from 'react-router-dom';
import ShowPaymentHistory from './ShowPaymentHistory';
import UpcomingPayment from './UpcomingPayment';


const Payment = () => {
   

  return (
    <>
    <div className='Topside'>
      <Link to="paymentHistory" className='lnk'>  <button className='Topsidebtn'><i class="fa-solid fa-clock-rotate-left fa-sm"></i> Show Transaction History</button></Link>
      <Link to="upcomingPayment"> <button className='Topsidebtn1'><i class="fa-regular fa-credit-card fa-sm"></i> Upcoming Payments</button></Link> 
     
    </div>
    <Outlet/>
  
    </>
  )
}

export default Payment;