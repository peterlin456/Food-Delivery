import React, { Fragment } from 'react'
import {Link,useLocation } from 'react-router-dom';
import '../styles/resturant.css'

export default function Resturant() {
    // const [resturant,setResturant] =useState({
    //     name:"",
    //     phone:"",
    //     address:""
    // },[]);
    const location =useLocation();
    const data =location.state; 
    // console.log(data);

  return (

    
    <div className='container'>
        <div className='row'>
                <h2 className='text-center  '>Resturant Details</h2>
                        <div className='card-group'>
                             {data.map(function(d, idx){
                                return (
                                <Fragment>
                                <div className='col-lg-4 col-md-12 d-flex align-items-stretch resturant-cards'>
                                    <div className='card '>
                                        <div className='card-header'>
                               
                                            <div className='card-body'>
                                                <div className="bg-image hover-overlay ripple img-box" data-mdb-ripple-color="yellow">
                                                    <img src={d.imageUrl} className="img-fluid"/>  
                                                    <a href="#!">
                                                    <div className="mask"></div>
                                                    </a>
                                              </div>
                                                <ul className="list-unstyled list-inline mb-0 text-center rating-star">
                                                    <li className="list-inline-item me-0" key={idx+=1}>
                                                        <i className="fas fa-star text-warning fa-xs"> </i>
                                                    </li>
                                                    <li className="list-inline-item me-0" key={idx+=1}>
                                                        <i className="fas fa-star text-warning fa-xs"></i>
                                                    </li>
                                                    <li className="list-inline-item me-0" key={idx+=1}>
                                                        <i className="fas fa-star text-warning fa-xs"></i>
                                                    </li>
                                                    <li className="list-inline-item me-0" key={idx+=1}>
                                                        <i className="fas fa-star text-warning fa-xs"></i>
                                                    </li>
                                                    <li className="list-inline-item" key={idx+=1}>
                                                        <i className="fas fa-star-half-alt text-warning fa-xs"></i>
                                                    </li>
                                                    <li className="list-inline-item" key={idx+=1}>
                                                        <p className="text-muted">4.5 (413)</p>
                                                    </li>
                                                    </ul>
                                                    <h4 className="mb-2">$ • <b>{d.name}</b></h4>
                                                <ul className='list-group list-group-flush'>
                                                    <li className='list-group-item' key={idx+=1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                    {/* <li className='list-group-item'key={idx+=1}>Resturant Phone:{d.phoneNumber}</li>
                                                    <li className='list-group-item'key={idx+=1}>Resturant Address:{d.address}</li> */}
                                                </ul>
                                                <Link to={'/Details'} state = {d} className="stretched-link"></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Fragment>
                                )
                            })}
                    </div>
                </div>
        </div>
        

  )
}









{/* <div class="container">
  <section class="mx-auto my-5" style="max-width: 23rem;">
      
    <div class="card">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" class="img-fluid" />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title font-weight-bold"><a>La Sirena restaurant</a></h5>
        <ul class="list-unstyled list-inline mb-0">
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"> </i>
          </li>
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item me-0">
            <i class="fas fa-star text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item">
            <i class="fas fa-star-half-alt text-warning fa-xs"></i>
          </li>
          <li class="list-inline-item">
            <p class="text-muted">4.5 (413)</p>
          </li>
        </ul>
        <p class="mb-2">$ • American, Restaurant</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
      </div>
    </div>
    
  </section>
</div> */}