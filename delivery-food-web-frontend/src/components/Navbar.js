/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import{Link,useNavigate} from 'react-router-dom'
import "../styles/navbar.css"

export default function Navbar() {
  const navigate = useNavigate();
  const [query,setQuery]=useState("");
  const [resturant,setResturant] =useState({
    name:"",
    phone:"",
    address:""
},[]);
  const handleSubmit= async (e)=>{
    e.preventDefault();
    navigate('/');
  }
  useEffect(()=>{
    handleSearch();
},[])
const handleSearch=(async (e) =>{ 
   const result= await axios.get(`http://localhost:8080/api/v1/restaurant/search?name=${query}`);
   setResturant(result.data[0]);
})

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
        

      </ul>
      <Link  to={'/login'}> <button class="btn btn-primary btn-circle">Login</button> </Link>
      
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={async (e) =>{
          setQuery(e.target.value)
          const res = handleSearch(query)
    
        }}></input>
        <Link class="btn btn-outline-success" type="submit" 
        to='/resturant' state={resturant}>Search</Link>

      </form>


    </div>
  </div>
</nav>
  )
}
