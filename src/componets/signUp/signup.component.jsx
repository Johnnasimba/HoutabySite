import React from 'react';
import { auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './signup.styles.scss';
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await signInWithGoogle(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h4 className='title'>Sign up a new user Admin</h4>
        
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            placeholder='Full Name of the new user'
            required
          />
          <input
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
            required
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
            required
          />
          <input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder='Confirm Password'
            required
          />
          <button className="btn" type='submit'>SIGN UP</button>
        </form>
      </div>
    );
  }
}

export default SignUp;