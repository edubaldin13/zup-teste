import './Header.css';
import React from 'react';

import computerPic from '../assets/computer.png';

export default props => 
<div className="intro">
<div className="intro-text">
<span className="intro-text-zup">ZUP</span>
<span className="intro-text-trails">trails</span>
</div>
<div className="intro-img">
<img src={computerPic} alt="Computador" className="computer-picture" />
</div>
</div>