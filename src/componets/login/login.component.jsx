import React from 'react';
import './login.styles.css'
import { signInWithGoogle} from '../../firebase/firebase.utils';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    
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
                    <div className="Buttons">
                        <button type="submit" className="btn ">Login by email and password</button>
                        <button onClick={signInWithGoogle}  className="btn green">Login by Google</button>
                    </div>                   
                </form>
            </div>
          );
    }
}
 
export default Login;