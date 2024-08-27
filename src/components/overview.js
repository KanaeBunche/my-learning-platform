import React from 'react';
import '../Style/overview.css';

const Overview = () => {
  return (
    <div className="container">
      <div className="login-signup">
        <h2>Login / Signup</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          <button type="button">Signup</button>
        </form>
      </div>

      <div className="course-overview">
        <h1>JavaScript Course Overview</h1>
        <ul>
          <li>1. Basics of JavaScript</li>
          <li>2. Control Structures</li>
          <li>3. Functions</li>
          <li>4. Objects & Arrays</li>
          <li>5. DOM Manipulation</li>
          <li>6. Asynchronous</li>
          <li>7. Projects & Exercises</li>
          <li>8. Building Real-World Applications</li>
        </ul>
        <p>Ready to dive into JavaScript? Get started by logging in or registering now and let the learning begin!</p>
      </div>

      <div className="vertical-text">
        <span>JavaScript</span>
      </div>
    </div>
  );
};

export default Overview;
