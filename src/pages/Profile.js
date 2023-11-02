import React, { useState, useEffect } from 'react';
import "../styles/profile.css";
import Logheader from '../components/Header/Logheader';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://wert-d1fo.onrender.com/getprofile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
    <div>
      <Logheader />
      <div className="app">
        <div className="app-main">
          <div className="profile">
            <div className="profile-header">
              <div className="profile-info">
                {user && (
                  <div>
                    <img src="https://img.freepik.com/premium-vector/social-avatar-stories-gradient-frame_41737-3.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="User Profile Logo" className="profile-logo" />
                    <p className="profile-h">PROFILE</p>
                    <hr />
                    <p className="profile-other">FirstName: {user.firstName}</p>
                    <hr/>
                    <p className="profile-other">LastName: {user.lastName}</p>
                    <hr/>
                    <p className="profile-other">Username: {user.username}</p>
                    <hr />
                    <p className="profile-other">Email: {user.email}</p>
                    <hr />
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
