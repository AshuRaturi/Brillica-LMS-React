import React from 'react'
import './Rightsection.css'
import Searchbar from './Searchbar';
import TestModule from './TestModule';
import { Routes,Route } from 'react-router-dom';
import Payment from './Payment';
import HtmlTest from './HtmlTest';
import CreateTest from './CreateTest';
import ResultTest from './ResultTest';
import TestModulebtns from './TestModulebtns';
import EncounteringIssue from './EncounteringIssue';
import LogoutModal from './LogoutModal';
import { useState } from 'react';



function Rightsection({Modalopen,hide}) {
  const [show,setShow]=useState(true);

  function hide(){
    setShow((prev)=>!prev)
   }


  return (

    <div className='rightSectiondiv'>
      <div className='abc'>
        {/* <HelpDesk/> */}
        
      {/* <TestModulebtns/> */}
        <Routes>

        <Route path='/' element={<Searchbar Modalopen={Modalopen}/>}> </Route>
        <Route path='/Testmodule' element={<TestModulebtns/>}>
           <Route index element={<TestModule/>}></Route>
            <Route path="alltest" element={<HtmlTest/>}></Route>
            <Route path="createtest" element={<CreateTest/>}></Route>  
            <Route path="result" element={<ResultTest/>}></Route>
        </Route>
        <Route path='/PayMent' element={<Payment/>}></Route>
        <Route path='/helpdesk' element={<EncounteringIssue/>}></Route>
        <Route path='/logout' element={<LogoutModal hide={hide}/>}></Route>
        
    </Routes>
    
    
        </div>
        
     </div>
  )
}

export default Rightsection;