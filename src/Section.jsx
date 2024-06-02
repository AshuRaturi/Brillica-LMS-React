import React from 'react'
import Asidebar from './Asidebar'
import './Section.css'
import Rightsection from './Rightsection';
import Supportdesk from './Supportdesk';
import HelpDesk from './HelpDesk'; 
import {Routes, Route } from 'react-router-dom';
import LogoutModal from './LogoutModal';



function Section({Modalopen,studentProfileOn}) {
  return (
    <div className='sectionDiv'>  

  <Asidebar/>
  <Rightsection Modalopen={Modalopen}/>
  
  
           
    </div>
  )
}

export default Section;