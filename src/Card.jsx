import React from 'react'
import "./Card.css"
import IMG1 from "./assets/Brillica logo.jpg"
import Modal from './Modal'
import { useState } from 'react'

function Card({val}) {
  const[open,setOpen]=useState(false)

  const on=()=>{
     setOpen(!open)
  }


  return (
    <>
    {val.map((Res)=>{
        return(
            <>
            <div className='cardDiv'>
    <div className='imgdiv'>
        <img src={IMG1} alt="" height="100%" width="100%"/>
    </div>
    <div className='pro-content'>
          <p><b>Course:-</b> {Res.courseName} </p>
          <p className='coursefee'><b>Course fee:-</b> {Res.courseFee} Rs. </p>
          <p className='trainer'><b>Trainer:-</b> {Res.trainer} </p> 
          <p className='time'><b>Timing:-</b>{Res.timing} <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> </p>
          <button onClick={()=>setOpen(true)}>View Details</button>
      </div>
      
 </div>
            
            </>
        )
    })}
 {open && <Modal on={on}/>}
    </>
  )
}

export default Card

