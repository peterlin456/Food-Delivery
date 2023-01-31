import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom';

export default function Resturant() {
    // const [resturant,setResturant] =useState({
    //     name:"",
    //     phone:"",
    //     address:""
    // },[]);
    const location =useLocation();
    const data =location.state;
    console.log(data);
 
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <h2 className='text-center m-4'>Resturant Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        Resturant Name:
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Resturant Name:{data.name}</li>
                            <li className='list-group-item'>Resturant Phone:{data.phoneNumber}</li>
                            <li className='list-group-item'>Resturant Address:{data.address}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
