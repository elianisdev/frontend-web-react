import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './home.module.scss';


export const Home: FC = () => {
    return (
        <nav>
            <div>
                <img className={styles.logo}
                src="https://www.shutterstock.com/image-vector/vector-illustration-cow-pig-goat-600nw-1377523625.jpg" alt="Logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

        </nav>
    );
}
