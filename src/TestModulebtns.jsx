import React from 'react'
import "./TestModulebtn.css"
import { Link, Outlet } from 'react-router-dom'


const TestModulebtns = () => {
  return (
    <>
    <div className='btn'>
       <Link to="alltest"><button className='Testmodule-btn'>All Test</button></Link> 
       <Link to="createtest"><button className='Testmodule-btn'>Create Test</button></Link>
       <Link to="result"><button className='Testmodule-btn'>Test Results</button></Link>
        </div>
        <Outlet/>
    </>
  )
}

export default TestModulebtns