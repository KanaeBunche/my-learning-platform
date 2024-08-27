import React, { useState } from 'react';
import '../Style/login.css';
import image1 from '../javascript/over.png';
import image4 from '../javascript/over.png';

function Login() {

// State to manage form visibility
const [isSignUp, setIsSignUp] = useState(false);
// State for form data
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [email, setEmail] = useState('');
// State for error handling
const [error, setError] = useState('');

const toggleForm = () => {
  setIsSignUp(!isSignUp);
};

const handleRegistration = async (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    setError('Passwords do not match');
    return;
  }
  try {
    const response = await fetch('http://127.0.0.1:5555/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        verify_password: confirmPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setError('');
      console.log('Registration successful:', data);
      // Handle successful registration (e.g., redirect to login page)
    } else {
      setError(data.error || 'Registration failed');
      console.error('Registration failed:', data);
    }
  } catch (err) {
    setError('Registration failed');
    console.error('Error during registration:', err);
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://127.0.0.1:5555/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setError('');
      console.log('Login successful:', data);
      // Handle successful login (e.g., redirect to dashboard)
    } else {
      setError(data.error || 'Login failed');
      console.error('Login failed:', data);
    }
  } catch (err) {
    setError('Login failed');
    console.error('Error during login:', err);
  }
};

return (
  <section >
    <header>Welcome To JavascriptPro!</header>
    <div className={`container ${isSignUp ? 'active' : ''}`}>
      <div className={`user signinBx ${isSignUp ? '' : 'active'}`}>
        <div className="imgBx">
          <img
            src={image4}
            alt="Sign In"
          />
        </div>
        <div className="formBx">
          <form onSubmit={handleLogin}>
            <h2>Sign In</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
            <p className="signup">
              Don't have an account?{' '}
              <a href="#" onClick={toggleForm}>
                Sign Up.
              </a>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
      <div className={`user signupBx ${isSignUp ? 'active' : ''}`}>
        <div className="imgBx">
          <img
            src={image1}
            alt="Sign Up"
          />
        </div>
        <div className="formBx">
          <form onSubmit={handleRegistration}>
            <h2>Create an account</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input type="submit" value="Sign Up" />
            <p className="signup">
              Already have an account?{' '}
              <a href="#" onClick={toggleForm}>
                Sign in.
              </a>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  </section>
);
}

export default Login;
