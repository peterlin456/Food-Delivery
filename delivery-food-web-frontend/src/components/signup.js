import React, { Component } from "react";
import { Form, Button, FormGroup,FormControl, ControlLabel } from "react-bootstrap";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="col-md-12">
                 <div className="card bg-light text-dark">
                <h1><center>Sign Up</center></h1>
                <Form>
                    <FormGroup>
                        <label for="username">Username</label>
                        <input id="username" type="text" name="username" placeholder="enter username" />
                    </FormGroup>
                    <FormGroup>
                        <label for="password">Password</label>
                        <input id="su_password" type="password" name="password" placeholder="enter password" />
                    </FormGroup>
                </Form>
            </div>
            </div>
        )
    }
}

export default Signup;