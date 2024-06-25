import React from 'react'; 
import './App.css';
import { Link } from 'react-router-dom';
 function Navbar() { 
    return (
        
     <>

        <h2>Dashboard Page</h2>
        <ul className="d-flex" style={{margin:"15px"}}>
        <li>
          <Link to="/" style={{margin:"25px"}}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" style={{margin:"25px"}}>Dashboard</Link>
        </li>
      
        <li>
          <Link to="/contact" style={{margin:"25px"}}>Contact</Link>
        </li>
        <li>
          <Link to="/login" style={{margin:"25px"}}>Login</Link>
        </li>
      </ul>
     </>
          )
         }
 export default Navbar; 
