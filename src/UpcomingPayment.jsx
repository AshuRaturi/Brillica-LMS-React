import React from 'react'
import atm from "./assets/atm-img.jpg"
import "./UpcomingPayment.css"

const UpcomingPayment = () => {
  return (
    <div className='atm_main_div'>
    <div className='atm_div'>
        <h3>No pending payment found..</h3><br />
        <img src={atm} alt="" width="100%" height="100%"
        />
    </div>
    </div>
  )
}

export default UpcomingPayment