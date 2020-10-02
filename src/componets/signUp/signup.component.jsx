import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../auth/base";
import './signup.styles.scss';

const SignUp = ({history})  => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);
    return (
      <div className='sign-up'>
        <h4 className='title'>Sign up a new user Admin</h4>
        
        <form className='sign-up-form' onSubmit={handleSignUp}>
          
          <input type='email'  name='email' placeholder='Email' required />
          <input  type='password' name='password' placeholder='Password' required />
          <button className="btn" type='submit'>SIGN UP</button>
        </form>
      </div>
    );
  }


export default withRouter(SignUp);