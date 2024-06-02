import React from 'react'
import "./HelpDesk.css"
import NeedHelp from "./assets/needhelp.png"

const HelpDesk = () => {
  return (
    <div className='helpcontainer'>
        <div className='helpupperdiv'>
           <div className='imggdiv'>
            <img src={NeedHelp} alt="" width="100%" height="100%"/>
           </div>
           <div className='needcontent'>
            <h2>Need a Help?</h2>
           </div>
           <div className='needinp'>
            <input type="text" name="" id="" /><i class="fa-solid fa-magnifying-glass"></i>
           </div>
           <div className='needpara'>
            <p>People also searching for : </p>
            <p className='needp'>Data not working / Slow data </p>
           </div>
        </div>
        <div className='helplowerdiv'>
            {/* <h2>Quick links</h2> */}
            <div className='needicons'>
                <div className='network short'>
                <i class="fa-solid fa-wifi fa-2xl"></i>
                <p>Check Network Coverage</p>
                </div>
                <div className='sim short'>
                <i class="fa-solid fa-sim-card fa-2xl"></i>
                <p>Move my number into a new sim</p>
                </div>
                <div className='report short'>
                <i class="fa-solid fa-circle-info fa-2xl"></i>
                <p>Report lost or stolen</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default HelpDesk