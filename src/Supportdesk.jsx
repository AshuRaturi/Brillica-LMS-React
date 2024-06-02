import React from 'react'
import "./Supportdesk.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Supportdesk = ({studentProfileOn}) => {
 
  
  
  
  return (
    <>
    {/* <div className={style["sample-module-class"]}></div> */}
    <div className='maindiv'>
    <div className='childdiv'>
    <span className='supportdesk-remove-btn'><i class="fa-solid fa-delete-left fa-xl" onClick={studentProfileOn}></i></span>

    <div className='NameDiv'><b>A</b></div>
    <div className='emaildiv'>
      <h3>ashutosh raturi</h3>
      <p>samratraturi27@gmail.com</p>
      <p>7060051875</p>
    </div>


    <div className="chat-wrapper">
     <div className="chat-support">
     <i class="fa-regular fa-comments"></i><span>Chat Support</span><i class="fa-solid fa-angle-right fa-1"></i>
     </div>

     <Link to='/helpdesk' className='lnk' ><div className="help-support"  onClick={studentProfileOn}>
     <i class="fa-solid fa-question"></i><span>Help Desk</span><i class="fa-solid fa-angle-right fa-1"></i>
     </div></Link>

     <Link to='/logout' className='lnk'> <div className="logout-support" onClick={studentProfileOn}>
      <i class="fa-solid fa-arrow-right-from-bracket"></i><span>Logout</span><i class="fa-solid fa-angle-right fa-1"></i>
     </div></Link>
    
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Supportdesk