//P. Elena Maddox, CSCE 242
import { useState } from 'react';
import {Link} from "react-router-dom";
import "./../css/Header.css";
import logo from "./../images/logo.png";

const Header = () => {

    const [menuOpen,setMenuOpen] = useState(false);
    const [downArrow, setDownArrow] = useState(true);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
        setDownArrow(!downArrow);
    };
    return (
        <header id = "main-header">
            <nav id="main-nav">
                 <a onClick = {toggleMenu} id="toggle-nav" href="#">
                {downArrow?(<p>&darr;</p>): (<p>&uarr;</p>)}
            </a>
                <Link to="/"><img id="logo" src={logo} alt="logo"/></Link>
                <ul id="columns" className = {menuOpen?"":"hide-small"}>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/fado">Fado</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;