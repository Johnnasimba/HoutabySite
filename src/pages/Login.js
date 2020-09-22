import React, { Component } from 'react';
import '../css/login.css';



class Login extends Component {
    render() {
        return (
            <div className="container" id="login"> 
                <h4 className="center">Login</h4>
                <form method="post" action="" className="center" >     
                    <label className="left" >Email</label>
                    <input type="text" name="email" placeholder="Enter your user email" required />
                    <label className="left" >Password</label>
                    <input type="password" name="password"  placeholder="Enter password" required />
                    <div className="container">
                        <h6 className="center red-text">error message</h6>
                    </div>
                    <button type="submit" className="btn ">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;