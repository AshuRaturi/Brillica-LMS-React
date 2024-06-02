import React from 'react'
import "./Payment.css"


const Payment = () => {
  return (
    <>
    <div className='Topside'>
        <button className='Topsidebtn'><i class="fa-solid fa-clock-rotate-left fa-sm"></i> Show Transaction History</button>
        <button className='Topsidebtn1'><i class="fa-regular fa-credit-card fa-sm"></i> Upcoming Payments</button>

    </div>
    <section className='paymenttable'>
      <table style={{boxShadow:"2px 2px 8px black", width:"100%",textAlign:"center",display:"flex",flexDirection:"column",gap:"2.5rem",padding:"10px",fontSize:"17px",borderRadius:"10px"}}  >
        <tr style={{textAlign:"center",display:"flex",gap:"13rem",backgroundColor:"rgb(243,243,243)",padding:"8px"}} className='ghj'>

        <th>COURSE</th>
        <th>PAYMENT VIA</th>
        <th>TRANSACTION ID</th>
        <th>AMOUNT</th>
        </tr><hr/>

        <tr style={{textAlign:"center",display:"flex",gap:"15.5rem"}}>
          <td><p>MERN STACK </p>
          <span style={{color:"rgb(136,136,135)"}}>16-Dec-23</span></td>
          <td>UPI</td>
          <td>Z00M34K330</td>
          <td style={{color:"green"}}>7000</td>
        </tr><hr/>

        <tr style={{textAlign:"center",display:"flex",gap:"15.5rem"}}>
        <td><p>MERN STACK </p>
          <span style={{color:"rgb(136,136,135)"}}>21-Dec-23</span></td>
          <td>UPI</td>
          <td>Z00M34K330</td>
          <td style={{color:"green"}}>8000</td>
        </tr><hr/>

        <tr style={{textAlign:"center",display:"flex",gap:"15.5rem", }}>
        <td><p>MERN STACK </p>
          <span style={{color:"rgb(136,136,135)"}}>30-Dec-23</span></td>
          <td>UPI</td>
          <td>Z00M34K330</td>
          <td style={{color:"green"}}>5000</td>
        </tr><hr/>

        <tr style={{textAlign:"center",display:"flex",gap:"15.5rem" }}>
        <td><p>MERN STACK </p>
          <span style={{color:"rgb(136,136,135)"}}>01-Feb-24</span></td>
          <td>UPI</td>
          <td>Z00M34K330</td>
          <td style={{color:"green"}}>6000</td>
        </tr><hr/>

        <tr style={{textAlign:"center",display:"flex",gap:"15.5rem", }}>
        <td><p>MERN STACK </p>
          <span style={{color:"rgb(136,136,135)"}}>01-Feb-24</span></td>
          <td>UPI</td>
          <td>Z00M34K330</td>
          <td style={{color:"green"}}>3000</td>
        </tr>
      </table>
    </section>
   
    </>
  )
}

export default Payment;