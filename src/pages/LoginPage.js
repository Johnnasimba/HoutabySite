import React, {useCallback, useContext} from 'react';
import { withRouter, Redirect } from "react-router";
import '../componets/login/login.styles.css'
import app from "../componets/auth/base";
import { AuthContext } from "../componets/auth/Auth";


const LoginPage =({history}) => {
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/admin");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/" />;
      }
        return (
            <div className="container" id="login"> 
                <h4 className="center">Login</h4>
                <form onSubmit={handleLogin} className="center" >     
                    <label className="left" >Email</label>
                    <input name='email' type='email' placeholder="Enter your user email" required />
                    <label className="left" >Password</label>
                    <input name='password' type='password' placeholder="Enter password" required />
                    <div className="Buttons">
                        <button type="submit" className="btn ">login</button>
                    </div>                   
                </form>
            </div>
          );
    }

 
export default withRouter(LoginPage);