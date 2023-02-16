/* eslint-disable react-hooks/rules-of-hooks */
import {  useState } from "react";
import "../styles/userpage.css";
import { Navigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function login() {
  const[email,setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[dir,setSet] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
  setEmail(e.target.value);
  setSubmitted(false);
  };
  
  // Handling the password change
  const handlePassword = (e) => {
  setPassword(e.target.value);
  setSubmitted(false);
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    const test = {email,password};
    
    if ( email === '' || password === '') {
      setError(true);
      
      }else{
        setSubmitted(true);
        setError(false);
        setSet(true);
        fetch("http://localhost:8080/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(test)
      }).then(() => (console.log("Login!")));
      
      }

      
   
      // .then((data) => {
      //   if(data.fieldErrors) {
      //     data.fieldErrors.forEach(fieldError => {
      //       if(fieldError.field === 'email'){
      //         setEmailError(fieldError.message);
      //       }

      //       if(fieldError.field === 'password'){
      //         setPasswordError(fieldError.message);
      //       }
      //     });
      //   } else {
      //     alert("Success !!");
      //   }
      // })
      // .catch((err) => err);
  }

  const errorMessage = () => {
    return (
    <div className="error"
    style={{
      color:"orange",
      fontSize: "15px",
      display: error ? '' : 'none'
      }}>
    Please enter all the fields with correct credentials
    </div>
    );
    };  

    const successMessage = () => {

      return (
      <div
      className="success"
      style={{
      display: submitted ? '' : 'none',
      color:"green",
      fontSize:"15px"
      }}>
      User successfully registered!!
      </div>
      );
      };

  return (
    <div className="App">
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column"
          style={{ minHeight: "100vh", flexGrow: 1 }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                className="box-root flex-flex"
                style={{ gridArea: "top / start / 8 / end" }}
              >
                <div
                  className="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: 1,
                  }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 2 / auto / 5" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "6 / start / auto / 2" }}
              >
                <div
                  className="box-root box-background--blue800"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "7 / start / auto / 4" }}
              >
                <div
                  className="box-root box-background--blue animationLeftRight"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "8 / 4 / auto / 6" }}
              >
                <div
                  className="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "2 / 15 / auto / end" }}
              >
                <div
                  className="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "3 / 14 / auto / end" }}
              >
                <div
                  className="box-root box-background--blue animationRightLeft"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 17 / auto / 20" }}
              >
                <div
                  className="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "5 / 14 / auto / 17" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: 1 }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>
                <a href="/home" rel="dofollow">
                  Food to Your Home
                </a>
              </h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">
                    Sign in to your account
                  </span>
                  <div className="messages">
                      {errorMessage()}
                      {successMessage()}
                  </div>
                  <form id="stripe-login" method="POST" autoComplete="off" >
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input value={email} type="text" name="email"   
                      onChange={handleEmail} />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                        {/* <div className="reset-pass">
                          <a href="/">Forgot your password?</a>
                        </div> */}
                      </div>
                      <input type="password" name="password"
                         value={password} 
                         onChange={handlePassword} ></input>
                    </div>
                    {/* <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label htmlFor="checkbox">
                        <input type="checkbox" name="checkbox" /> Stay signed in
                        for a week
                      </label>
                    </div> */}
                    <div className="field padding-bottom--24">
                    <Button name="submit" type="submit" onClick={onSubmit}>Login</Button>{
                         dir ?  (<Navigate to="/"></Navigate>): null
                      }
                    </div>
                    {/* <div className="field">
                      <a className="ssolink" href="/">
                        Use single sign-on (Google) instead
                      </a>
                    </div> */}
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>
                  Don't have an account? <a href="/signup">Sign up</a>
                </span>
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span>
                    <a href="/">© Food to Your Home</a>
                  </span>
                  <span>
                    <a href="/">Contact</a>
                  </span>
                  <span>
                    <a href="/">Privacy & terms</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

