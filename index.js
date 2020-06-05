import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import FacebookLogin from 'react-facebook-login';

 
const App = () => {
    const [user, setUser] = useState(null)

    const responseFacebook = (response) => {
      setUser(response);
    }

    const componentClicked = (response) => {
      console.log(response)
    }

    const handleFailure = () => {
      console.log("need to login")
    }
    
    return (
      <div className="container">
      {
        user ? 
        <div>
          <img src={user.picture.data.url} alt="avatar" />
          <h1>Welcome {user.name}</h1>
        </div>
         : 
        <div>
          <h1>
            Facebook Authentication
          </h1>
          <FacebookLogin
            appId="579620999335585"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} 
            onFailure={handleFailure}
          />
        </div>
      }
      </div>
    );
  }

render(<App />, document.getElementById('root'));
