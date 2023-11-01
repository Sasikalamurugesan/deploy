import React from 'react';
import { useState ,useEffect} from 'react';
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
    <div><Logheader/>
    <div className="app">

      <div className="app-main">
       
        <div className="profile">
          <div className="profile-header">
            
            <div className="profile-info">
         
        <div>
          
       
              <p className="profile-h">PROFILE</p>
              <hr/>
              <p className="profile-other">username&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; sasikala</p>
              <hr />
              <p className="profile-other">Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; sasikalamurugesan@gmail.com</p>
              <hr />
              <p className="profile-other">FirstName&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;sasismurugesan</p>
              <hr/>
            
              
              
              </div>

            </div>

           
          </div>
        </div>
      </div>
    </div></div>
  
  );
}

export default Profile;
