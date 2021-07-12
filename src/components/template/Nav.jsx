import './Nav.css' ;
import React from 'react';

import profilePic from '../assets/img1.png';

import { Link } from 'react-router-dom';

export default props => 
<nav className="menu">
    <span className="subs">Inscrições: 0 </span>    
    <Link to="/">
        <img className="profile-picture" src={profilePic} alt="Foto de perfil" />
    </Link>
</nav>