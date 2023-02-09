import { Component } from "react";
import React from 'react'
import { Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/userpage.css"

class login extends Component{

    constructor() {
        super();
        this.state = {
          sessionToken: '' ,
          username: '',
          password: ''
        }
      }
    
    componentWillMount() {
        const token = localStorage.getItem('token'); //4
        if (token && !this.state.sessionToken) {   //5 
          this.setState({ sessionToken: token });
        }
    }
    
    setSessionState = (token) => {
        localStorage.setItem('token', token); //3
        this.setState({ sessionToken: token });
    }

    handleChange = (event) => {
        
        this.setState({
                
            [event.target.name]: event.target.value,
        });
        }

    render() {
        return (
            <div className="col-md-12">
                <div className="card bg-light text-dark">
                <h1><center>Login</center></h1>
                
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                </FormGroup>
                
                <Link to={'/signup'}>Register Account</Link>
                <Button type="submit"> Submit </Button>     

                </Form>
                
                </div>
            </div>
        )
    }

}
export default login;