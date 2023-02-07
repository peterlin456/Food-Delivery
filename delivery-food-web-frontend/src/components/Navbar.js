import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'
import{Link,useNavigate} from 'react-router-dom'


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
   setResturant(result.data);
})

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={async (e) =>{
          setQuery(e.target.value)
          const res = handleSearch(query)
    
        }}></input>
        <Link className="btn btn-outline-success" type="submit" 
        to='/resturant' state={resturant}>Search</Link>

      </form>
    </div>
  </div>
</nav>
  )
}
