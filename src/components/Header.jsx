//P. Elena Maddox, CSCE 242

import {Link} from "react-router-dom";
import "./../css/Header.css";
import logo from "./../images/logo.png";

const Header = () => {
    return (
        <header id = "main-header">
            <nav id="main-nav">
                <Link to="/">Home<img id="logo" src={logo} alt="logo"/></Link>
                <ul className="columns">
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