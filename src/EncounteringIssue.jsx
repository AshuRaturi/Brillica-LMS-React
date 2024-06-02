import React from 'react'
import "./EncounteringIssue.css"
import image1 from "./lms issue brillica.png"
import image2 from "./account issue lms.png"

const EncounteringIssue = () => {
  return (
    <>
      <div className='parent-div'>
        <div className='encounter-heading'>
        <div><i class="fa-solid fa-circle-exclamation fa-xl"></i></div>
        <div>
        <h1 style={{color:"rgb(52,152,220)",marginBottom:"1rem"}}>Encountering Issue?</h1>
        <p>Fear not! Our dedicated Support Team is here to swiftly resolve any problem you're facing. Simply raise a ticket, and we'll get to work on finding the solution for you.</p></div>
        </div>

        <div className='encounter-content-maindiv'>
           <div className='encounter-content'>
            <div className='encounter-image-div'>
                <p>Your issue is releted to:</p>
                <div className='lms-div' style={{height:"120px",width:"120px",borderRadius:"5px",boxShadow:"3px 3px 5px grey",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"5px",backgroundColor:"rgb(224,252,252)",color:"rgb(51,48,139)",fontSize:"12px",transition:"0.6s",animation: "example ,4s"}}>
                <img src={image1} alt="" height="70%" width="70%" />LMS</div>

                <div className='account-div' style={{height:"120px",width:"120px",borderRadius:"5px",boxShadow:"3px 3px 5px grey",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"5px",backgroundColor:"rgb(224,252,252)",color:"rgb(51,48,139)",fontSize:"12px",transition:"0.6s"}}>
                <img src={image2} alt="" height="70%" width="70%" />Your account</div>
            </div>
            <div className=''>
                <p>Describe your issue:</p><br />
                <textarea name="" id="" cols="100" rows="3" placeholder='Describe Your Issue'></textarea>
            </div><br/><br/>
            <div className='uploadimage-div'>
                
                <div style={{height:"150px",width:"150px",border:"1px solid grey",backgroundColor:"rgb(226,226,226,1)",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",color:"rgb(1,1,1,0.6)",fontSize:"18px"}}>640 x 450</div><br/>
                <button className='image-button' type='file'>Upload Image</button>
              
                 
            </div><br />
            <button className='ticket-raise-button'>Raise Ticket</button>
            
           </div>
        </div>
      </div>
    </>
  )
}

export default EncounteringIssue;