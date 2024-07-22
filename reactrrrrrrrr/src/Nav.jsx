import React from "react";
import { Link } from "react-router-dom";    
import './Nav.css'


function Nav()
{
    return (
        <div class="navall">
        <Link className='nav' to="/Cs"> CS </Link>
        <Link className='nav' to="/Ec">  ec  </Link>
        </div>
    )
}

export default Nav