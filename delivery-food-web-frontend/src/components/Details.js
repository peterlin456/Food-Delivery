import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Details() {
    const location = useLocation();
    const data =location.state; 
    console.log(data);  
  return (
    <div className='containers'>
        <div className='row'>
            <h1 className=''>{data.name}</h1>
            <p>{data.address}</p>
            <p>{data.phoneNumber}</p>
        </div>
        <div className='row'>
            
            <p>10-20mins.$2.99 Delivery Fee</p>
        </div>
    </div>
  )
}
