import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import config from './config/socialConfig';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseFacebook = (response) => {
    console.log(response);
    console.log(response.email);
  }

  return (
    <div className="main">
      <div className="container">
        <div className="box a">       
          <GoogleLogin
            clientId={config.googleId}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div className="box b">       
          <FacebookLogin
            appId={config.facebookId}
            autoLoad={false}
            fields="name,email,picture"
            onClick={responseFacebook}
            callback={responseFacebook} 
          />
        </div>
        <div className="box c"> C </div>
      </div>          
    </div>
  );
}

export default App;
