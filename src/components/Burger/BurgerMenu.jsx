import React from 'react';
import style from './burger.module.css'
import {Link} from "react-router-dom";

function BurgerMenu(props) {
    return (
        <div className={style.wrapper}>
            <nav className={style.burgerNav}>
                <Link to="/"><p className={style.navItem}>About</p></Link>
                <Link to="/portfolio"><p className={style.navItem}>Portfolio</p></Link>
                <a href="https://www.linkedin.com/in/anton-molchanov-pdm" target="_blank"><p className={style.navItem}>LinkedIn</p></a>
                <a href="https://www.facebook.com/anton.molchanov.3954/" target="_blank"><p className={style.navItem}>Facebook</p></a>
            </nav>
        </div>
    );
}

export default BurgerMenu;