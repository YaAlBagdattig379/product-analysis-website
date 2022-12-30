import React from 'react';
import './Header.css'
import  {NavLink} from 'react-router-dom';
const Header = () => {

const NavLinkCSS = ({isActive}) =>{
return{
     fontWeight : isActive ? '700': 'normal',
}

}
return (
        <div className='header'>
            <NavLink style={NavLinkCSS} to="./home">HOME</NavLink>
            <NavLink style={NavLinkCSS} to="/reviews">REVIEWS</NavLink>
            <NavLink style={NavLinkCSS} to="/dashboard">DASHBOARD</NavLink>
            <NavLink style={NavLinkCSS} to="/blogs">BLOGS</NavLink>
            <NavLink style={NavLinkCSS} to="/about">ABOUT</NavLink>
        </div>
    );
};

export default Header;