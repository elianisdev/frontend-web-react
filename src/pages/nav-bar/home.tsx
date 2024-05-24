import React, {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './home.module.scss';
import {HeaderComponent} from "../header/header";


export const Home: FC = () => {
    const navigate = useNavigate();
    return (
        <>

            <nav>
                <div>
                    <img className={styles.logo}
                         src="https://www.shutterstock.com/image-vector/vector-illustration-cow-pig-goat-600nw-1377523625.jpg"
                         alt="Logo"/>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div>
                    <Link to="/login">
                        <button className={'button button-primary'} onClick={()=> navigate('login')}>Login</button>
                    </Link>
                    <Link to="/register">
                        <button className={'button button-primary'}>Register</button>
                    </Link>
                </div>
            </nav>
            <HeaderComponent  description={'Bienvenido a mi pagina'}/>
        </>

    );
}
