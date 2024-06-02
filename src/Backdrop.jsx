import React from 'react'
import ModalCard from './ModalCard';
import "./Backdrop.css"

const Backdrop = ({on}) => {


  return (
    <div className='back' >
      <span ><i class="fa-solid fa-delete-left fa-xl Modal-Remove-button " onClick={on}></i></span>
       <ModalCard/>
    </div>
  )
}

export default Backdrop;