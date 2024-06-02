import React from 'react'
import { createPortal } from 'react-dom'
import Backdrop from './Backdrop'
import './Modal.css'


const Modal = ({on}) => {

  return (
    <>
     <div className='Modal-main-div'>
     
     {createPortal(<Backdrop on={on}/>,document.getElementById("backdrop"))}
     </div>
    </>
  )
}

export default Modal;