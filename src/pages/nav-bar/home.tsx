import React, {FC, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './home.module.scss';
import {HeaderComponent} from "../header/header";
import {poke} from "../../api/poke";
import {CardComponent} from "../card/card";


export const Home: FC = () => {
const getPoke = async () => {
    try {
        const response = await poke.getAll( {id: 25});
        console.log(response.data);
    } catch (e) {
        console.error(e);
    }
};
    useEffect(() => {
        getPoke();
    }, []);

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
            <HeaderComponent  description={'Bienvenido a mi pagina'} element={'Bienvenido a mi pagina'}/>
            <CardComponent Card={6} />
        </>

    );
}
