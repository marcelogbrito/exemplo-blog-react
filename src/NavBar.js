import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre mim</Link>
                    </li>
                    <li>
                        <Link to="/artigos">Artigos</Link>
                    </li>

                </ul>
            </nav>
            
        </div>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;