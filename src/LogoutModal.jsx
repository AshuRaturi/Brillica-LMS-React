import React from 'react'
import './LogoutModal.css'
import { useState } from 'react'

const LogoutModal = ({hide}) => {
 
  

  return (
    <>
    <div className='logout-maindiv'>
        <div className='logout-modal'>
            
            <span><i class="fa-regular fa-circle-question fa-xl"></i></span>
            <p>Are you sure want to logout ?</p>
           <div className='logout-button-div'> <button className='logout-ok-button' >OK</button>
        <button className='logout-cancel-button' onClick={()=>{hide}}>Cancel</button></div>
        </div>
    
    </div>3
    
    </>
  )
}

export default LogoutModal;