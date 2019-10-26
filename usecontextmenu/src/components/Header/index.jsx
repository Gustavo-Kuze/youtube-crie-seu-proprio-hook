import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Header = ({ children }) => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to="/">Painel</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </header>
            {children}
        </>
    );
};

export default Header;
