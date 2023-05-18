import React, { useState } from 'react';
import '../styles/Authentication.css';
import { VscSignIn } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Login = ({ onSwitchToRegister, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (email === 'example@example.com' && password === '1234') {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='container-wrapper'>
      <div className="container">
        <form className="form-login">
          <h3>Login here</h3>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" name="pswd" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          <div className='SignUp-label'>
            <label onClick={onSwitchToRegister}>SignUp.  <VscSignIn /></label>
          </div>
        </form>
      </div>
    </div>
  );
}

const Register = ({ onSwitchToLogin }) => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <form className="form-label">
          <h3>Register here</h3>
          <label>User Name:
            <input type="text" placeholder='User Name' />
          </label>
          <label>Email:
            <input type="text" placeholder='User Email' />
          </label>
          <label>Password:
            <input type="password" placeholder='User Password' />
          </label>
          <label>Confirm password:
            <input type="password" placeholder='User Confirm Password' />
          </label>
          <button>Register</button>
          <div className='SignIn-label'>
            <label onClick={onSwitchToLogin}>SignIn.  <VscSignIn /></label>
          </div>
        </form>
      </div>
    </div>
  );
}

function Authentication() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const switchToLogin = () => {
    setIsRegistering(false);
  }

  const switchToRegister = () => {
    setIsRegistering(true);
  }

  if (isAuthenticated) {
    return <div>You are authenticated.</div>;
  }

  return (
    <div>
      {isRegistering ? (
        <Register onSwitchToLogin={switchToLogin} />
      ) : (
        <Login onSwitchToRegister={switchToRegister} setIsAuthenticated={setIsAuthenticated} />
      )}
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Switch to login' : 'Switch to register'}
      </button>
    </div>
  );
}

export default Authentication;
