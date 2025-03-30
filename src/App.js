import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")


  function handleuser(evt)
  {
    setuser(evt.target.value)
  }

  function handlepass(evt){
    setpass(evt.target.value)
  }

  function check() {
    var logindetails = axios.post("https://back-end-1-wte0.onrender.com/login",{"username":user,"password":pass});

    logindetails.then(function(datat) {
        if (datat.data === true) {
           navigate('/success');
        } else {
            navigate('/fail');
        }
    });
}

    


  

return (
  <div className="login-container">
     <h2 style={{ color: "white", marginBottom: "20px" }}>Login</h2>

      <div className="input-box">
        <input type="text" onChange={handleuser} name="username" placeholder="Username" />
      </div>
      <div className="input-box">
        <input type="password" onChange={handlepass} name="password" placeholder="Password" />
      </div>
      <button onClick={check} className="login-btn">Login</button>
    </div>
  );
};

export default App;
