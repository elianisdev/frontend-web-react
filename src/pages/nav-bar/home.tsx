import React, {FC} from 'react';
import {Link} from "react-router-dom";
import './home.module.scss';


export const Home: FC = () => {
    return (
        <nav>
            <div>
                <Link to="/"><img className={'navbar-logo'}  src="https://cdn.appdesign.dev/wp-content/uploads/2015/09/logo-icon.png" alt="Logo" /></Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div>
                <Link to="/login"><button>Login</button></Link>
            </div>
        </nav>
    );
}
