import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/LoginPage.module.css';   
import { Axios } from 'axios';
function LoginPage() {
    let [userdata, setuserdata] = useState({ username: "", password: "" });
let navigate=useNavigate()
let handle=()=>{
  navigate("/")
}
    let updateuserdata = ({ target: { name, value } }) => {
      setuserdata({ ...userdata, [name]: value });
    };
  
    let submitdata = (e) => {
      console.log("okay");
      e.preventDefault();
  
      let backend = async () => {
        try {
          let result = await Axios.post("http://localhost:4000/formdata/addFormdatas", userdata);
         alert("SignUp Succesfully");
          console.log(result);
          console.log(userdata);
          // window.open("http://localhost:3000/login")
        } catch (err) {
          console.log("Error", err);
        }
      }
      backend();

    }
  return (
    <div className="container d-flex justify-content-center align-item-center">
      <div className="form">
      <form action="" onSubmit={submitdata} className=" form-row">
      <h1 className="h1">Login</h1>
        <input className="users"
          type="text"
          placeholder="UserName"
          name="username"
          value={LoginPage.username}
          onChange = { updateuserdata }
        />
      <br/>
      
        <input className="passw"
          type="password"
          placeholder="Password"
          name="password"
          value={LoginPage.password}
         onChange = { updateuserdata }
        />
        <br/>
        <br/>
      
        <button type="submit" className="sub ms-1" onClick={handle}>
          Login
        </button>
        <br /> 
      </form>
      </div>
    
        
        
        </div>
  )
}

export default LoginPage