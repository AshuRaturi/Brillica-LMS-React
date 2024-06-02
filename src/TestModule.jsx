import React from 'react'
import "./TestModule.css"
import TestModulebtns from './TestModulebtns'

const TestModule = () => {
  return (
    <div>
     
        <div className='parent'>
        <div className='child'>
            <h1>Frontend Development</h1>
            <span>HTML,CSS,JavaScript <i class="fa-solid fa-angle-down fa-sm"></i></span><hr/>
            <table border={{}} style={{boxShadow:"1px 1px 4px black", width:"90%",textAlign:"center",margin:"auto",marginTop:"3rem"}}>
              <tr style={{fontWeight:"800"}}>
               <td>Test Topic</td>
               <td>Score</td>
              </tr>

              <tr>
                <td>HTML</td>
                <td>26/30</td>
              </tr>

              <tr>
                <td>CSS</td>
                <td>23/30</td>
              </tr>

              <tr>
                <td>JavaScript</td>
                <td>24/30</td>
              </tr>
            </table>
            <span className='span'><i class="fa-solid fa-database">Grade A</i></span>
        </div>
        </div>
    </div>
  )
}

export default TestModule;