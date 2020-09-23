import React, {Component} from 'react';
import './login.styles.css'
import { auth, signInWithGoogle} from '../../firebase/firebase.utils';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit =async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }        
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    render() { 
        return (
            <div className="container" id="login"> 
                <h4 className="center">Login</h4>
                <form onSubmit={this.handleSubmit} className="center" >     
                    <label className="left" >Email</label>
                    <input onChange={this.handleChange}
                        name='email'
                        type='email'
                        value={this.state.email}
                        placeholder="Enter your user email"
                        required />
                    <label className="left" >Password</label>
                    <input onChange={this.handleChange}
                         name='password'
                         type='password'
                         value={this.state.password}
                        placeholder="Enter password"
                        required />
                    <div className="container">
                        <h6 className="center red-text">error message</h6>
                    </div>
                    <div className="Buttons">
                        <button type="submit" className="btn ">login</button>
                        <button onClick={signInWithGoogle}  className="btn green">Login by Google</button>
                    </div>                   
                </form>
            </div>
          );
    }
}
 
export default Login;