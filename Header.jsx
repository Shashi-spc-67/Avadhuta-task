import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/Header.module.css'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
<div className="container-fluid">
  <a className="navbar-brand text-danger">MYNTRA</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-itemme-auto mb-2 mb-lg-0" >
        <Link className="nav-link text-dark" to="/" aria-current="page">Home</Link>
      </li>
      <li className="nav-itemme-auto mb-2 mb-lg-0">
        <Link className="nav-link text-dark" to="/Products" aria-current="page">Products</Link>
      </li>
      <li className="nav-itemme-auto mb-2 mb-lg-0">
        <Link className="nav-link text-dark" to="/About" aria-current="page">About</Link>
      </li>
    </ul>
    <form className="ic d-flex ">
    <Link to="/SignUpPage" className='lnk lnk-md'><button className="btn btn-outline-danger me-3" type="submit"><CiInstagram /></button></Link>
    <Link to="/SignUpPage"className='lnk lnk-md'><button className="btn btn-outline-danger me-3" type="submit"><CiFacebook /></button></Link>
    <Link to="/SignUpPage" className='lnk lnk-md'><button className="btn btn-outline-danger me-3" type="submit"><CiTwitter /></button></Link>
    </form>
  </div>
</div>
</nav>
</div>
)
}

export default Header