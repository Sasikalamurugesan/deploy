import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../styles/signup.css";
function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contactNumber: '',
  });

  const { username, email, password, contactNumber } = formData;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (username === '' || email === '' || password === '' || contactNumber === '') {
      Swal.fire('Please fill in all fields', '', 'warning');
    } else {
      try {
        const response = await fetch('https://front-ct.onrender.com/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          Swal.fire('Login successfully. Welcome!', '', 'success');
          navigate('/Lhome');
        } else {
          const data = await response.json();
          console.error('Server response:', data);
          alert('An error occurred during registration: ' + data.message);
        }
      } catch (error) {
        console.error('Client error:', error);
        alert('An error occurred during registration: ' + error.message);
      }
    }
  };

  return (
    <div className="sign">
      <div className="login-container">
        <div className="signup-content">
          <div className="login-form">
            <h2></h2>

            <form onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
              
              <button type="submit">Login</button>
              <br />
              <br />
              
            </form>
          </div>
          <div className="sign-image">
            <img
              src="https://content1.getnarrativeapp.com/static/d6a80e0b-ff68-4f12-89d6-d863ee7204d0/Griffin%E2%80%99s-Wedding-Flowers-Columbus-Ohio-.jpg?w=750 "
              alt="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
