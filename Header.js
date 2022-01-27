import React from 'react';
import '../Header';
import img from './fondoqatar.jpg';

const Header = (props) => {
  return (
    <div className='Header'>
        render()
        <img src={img} alt='logo-qatar-2022' />
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    
     </div>
  );
};

export default Header; 
