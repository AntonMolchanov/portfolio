import React, {useState} from 'react';
import aLetter from '../img/1553103_a_blue_letter_alphabet_letters_icon.svg'
import mLetter from '../img/1553077_blue_letter_m_alphabet_letters_icon.svg'
import style from './header.module.css'
import Burger from "../Burger/Burger";
import {Link} from "react-router-dom";

function Header(props) {

    return (
        <div className={style.header}>
            <div className="header-logo">
                <Link to="/">
                    <img src={aLetter} alt=""/>
                    <img src={mLetter} alt=""/>
                </Link>
            </div>
            <Burger/>
        </div>

    );
}

export default Header;