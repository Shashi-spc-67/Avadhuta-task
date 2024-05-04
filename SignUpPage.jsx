import { Axios } from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Css/SignUpPage.module.css'

function SignUpPage() {
    let [userdata, setuserdata] = useState({ username: "", password: "" });
  let navigate=useNavigate()
    let updateuserdata = ({ target: { name, value } }) => {
      setuserdata({ ...userdata, [name]: value });
    };
    function handleClick() {
      navigate("/LoginPage");
    }
  
    let submitdata = (e) => {
      console.log("okay");
      e.preventDefault();
  
  
      let backend = async () => {
        try {
          let result = await Axios.post("http://localhost:4000/formdata/addFormdatas", userdata);
         alert("SignUp Succesfully");
       
       
          console.log(result);
        //  console.log(res);
        } catch (err) {
          console.log("Error", err);
        }
      }
      backend();
    }
    return (
      <div className="container">
        <div className="row-md-3">
      <div className="container d-flex justify-content-center align-item-center">
     
        <form action="" onSubmit={submitdata} className=" form form-row">
        <h1 className="h1">SignUP</h1>
          <input className="users user-m-1  "
            type="text"
            placeholder="UserName"
            name="username"
            value={SignUpPage.username}
            onChange = { updateuserdata }
          />
        <br/>
        
          <input className="passw"
            type="password"
            placeholder="Password"
            name="password"
            value={SignUpPage.password}
           onChange = { updateuserdata }
          />
          <br/>
          <br/>
        
          <button type="submit" className="sub ms-1" onClick={handleClick}>
            SignUp
          </button>
          <br />
        <p className="ms-5">or</p>
        <Link to="/LoginPage" className="ms-5">Login</Link>
        </form>
        </div>
        </div>
      </div>
    );
  }

export default SignUpPage