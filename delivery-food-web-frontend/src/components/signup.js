import React,{ useState } from "react";
// import TextField from '@material-ui/core/TextField';
import "../styles/userpage.css";
import { Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';



export default function Signup() {
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  const[email,setEmail] = useState('');
  const[firstname, setFirstname] = useState ('');
  const[lastname, setLastname] = useState('');
  const[password, setPassword] = useState('');
  const[dir,setSet] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleFirstName = (e) => {
  setFirstname(e.target.value);
setSubmitted(false);
};
const handleLastName = (e) => {
  setLastname(e.target.value);
setSubmitted(false);
};

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

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (firstname === ''|| lastname === ''|| email === '' || password === '') {
setError(true);

} else {
setSubmitted(true);
setError(false);
setSet(true);
const test = {email,firstname,lastname,password};
    console.log(test);
    fetch("http://localhost:8080/api/v1/register", {
      method: "POST",
      headers: {
       "Content-Type": "application/json"
      },
      body: JSON.stringify(test)
    }).then(() => (console.log("New Account Created")));
}

};

// Showing success message
const successMessage = () => {

  return (
  <div
  className="success"
  style={{
  display: submitted ? '' : 'none',
  color:"green",
  fontSize:"15px"
  }}>
  User {firstname} successfully registered!!
  </div>
  );
  };

// Showing error message if error is true
const errorMessage = () => {
  return (
  <div className="error"
  style={{
    color:"orange",
    fontSize: "15px",
    display: error ? '' : 'none'
    }}>
  Please enter all the fields
  </div>
  );
  };  

  // const handleClick= (e) =>{
  //   e.preventDefault();
  //   const test = {email,firstname,lastname,password};
  //   console.log(test);
  //   fetch("http://localhost:8080/api/v1/register", {
  //     method: "POST",
  //     headers: {
  //      "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(test)
  //   }).then(() => console.log("New Account Created"));
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);

  //   fetch("http://localhost:8080/api/v1/register", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: formData.get('email'),
  //       firstname: formData.get('firstname'),
  //       lastname: formData.get('lastname'),
  //       password: formData.get('password'),
  //     }),
  //   })
  //     .then((response) => response.json())
  // }

  // const onEmailFocus = (e) => {
  //   e.preventDefault();
  //   setEmailError('');
  // }

  // const onPasswordFocus = (e) => {
  //   e.preventDefault();
  //   setPasswordError('');
  // }
  

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
                    Sign up your account
                  </span>

                  <div className="messages">
                      {errorMessage()}
                      {successMessage()}
                  </div>
                  <form id="stripe-login" method="POST" noValidate autoComplete="off" >
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input value={email} type="text" name="email"   
                      onChange={handleEmail} />
                      {/* <TextField id="outlined-basic" variant="outlined" fullWidth 
                      value={email} 
                      Onchange={
                        (e)=>setEmail(e.target.value)}>
                      </TextField> */}
                      {/* <input type="text" name="email" onFocus={onEmailFocus}/>
                      {
                        emailError ? <span style={{ color: 'red', fontSize: '12px'}}>{emailError}</span> : ''
                      } */}
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="firstname">First Name</label>
                      <input type="text" name="firstname" value={firstname} 
                      onChange={handleFirstName}></input>
                      {/* <TextField id="outlined-basic" variant="outlined" fullWidth 
                      value={firstname} 
                      Onchange={
                        (e)=>setFirstname(e.target.value)}>
                      </TextField> */}
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="lastname">Last Name</label>
                      <input type="text"  name="lastname" value={lastname} 
                      onChange={handleLastName}></input>
                      {/* <TextField id="outlined-basic" variant="outlined" fullWidth 
                      value={lastname} 
                      Onchange={
                        (e)=>setLastname(e.target.value)}>
                      </TextField> */}
                    </div>
                    <div className="field padding-bottom--24">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                         value={password} 
                         onChange={handlePassword} ></input>
                        {/* <TextField id="outlined-basic" variant="outlined" fullWidth 
                          value={password} 
                          Onchange={
                         (e)=>setPassword(e.target.value)}>
                      </TextField> */}
                        {/* <div className="reset-pass">
                          <a href="/">Forgot your password?</a>
                        </div> */}
                      {/* <input type="password" name="password" onFocus={onPasswordFocus}/>
                      {
                        passwordError ? <span style={{ color: 'red', fontSize: '12px'}}>{passwordError}</span> : ''
                      } */}
                    </div>
                    {/* <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label htmlFor="checkbox">
                        <input type="checkbox" name="checkbox" /> Stay signed in
                        for a week
                      </label>
                    </div> */}
                    <div className="field padding-bottom--24">
                      {/* <input type="submit" name="submit" value="Continue" /> */}
                      <Button name="submit" type="submit" onClick={handleSubmit}>Create a New Account</Button>{
                        dir ?  (<Navigate to="/login"></Navigate>): null
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
                {/* <span>
                  Don't have an account? <a href="/signup">Sign up</a>
                </span> */}
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

