import React, { useRef, useState } from 'react'
import "./Searchbar.css"
import Card from './Card';

function Searchbar({Modalopen}) {
    
    let OBj= [{courseName:"Mern Stack", courseFee:30000, trainer:"Nitin Bela", timing:"10:00AM - 12:00PM"},
    {courseName:"Digital-Marketing", courseFee:25000, trainer:"Nitin Bela", timing:"03:00PM - 04:30PM"},
    {courseName:"Data-Analytics", courseFee:32000, trainer:"Nitin Bela", timing:"12:00PM - 02:00PM"},
    {courseName:"Data-Science", courseFee:35000, trainer:"Nitin Bela", timing:"04:30PM - 06:00PM"},
     {courseName:"Cloud-Engineering", courseFee:25000, trainer:"Raghavendra", timing:"12:00PM - 02:00PM"},
  ];


     let [Value,setValue]=useState([{courseName:"Mern Stack", courseFee:30000, trainer:"Nitin Bela", timing:"10:00AM - 12:00PM"},
     {courseName:"Digital-Marketing", courseFee:25000, trainer:"Nitin Bela", timing:"03:00PM - 04:30PM"},
     {courseName:"Data-Analytics", courseFee:32000, trainer:"Nitin Bela", timing:"12:00PM - 02:00PM"},
     {courseName:"Data-Science", courseFee:35000, trainer:"Nitin Bela", timing:"04:30PM - 06:00PM"},
     {courseName:"Cloud-Engineering", courseFee:25000, trainer:"Raghavendra", timing:"12:00PM - 02:00PM"},
   ]);

     const inputValue= useRef();

     function getVal(){

        Value= inputValue.current.value.toLowerCase();
        let items= OBj.filter((item)=>{
            let keys= Object.keys(item)
            console.log(keys)

            for( let i=0; i<keys.length; i++){
                let VaL= keys[i];

                console.log(VaL)
                console.log(item[VaL])
               if(String(item[VaL]).toLowerCase().includes(Value)) {
                return (item)
               }
            }
            
        });
      setValue(items)
        
     };

  return (
    <>
    <div className='searchBarDiv'>

       <div className='icon'> 
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        <input type="text" id='inp' placeholder='Find here....' ref={inputValue} onChange={getVal}/>
       </div>
    </div>

    <div className='btn'>
        <button className='btnn'>Current</button>
        <button className='btnn'>Batch</button>
        <button className='btnn'>Upcoming</button>
        </div>

     <div className='caRD'>
    <Card Modalopen={Modalopen} val={Value}/>
    </div>
    </>
    
  )
}

export default Searchbar;