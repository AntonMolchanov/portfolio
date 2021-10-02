import React from 'react';
import aLetter from '../../img/1553103_a_blue_letter_alphabet_letters_icon.svg'
import mLetter from '../../img/1553077_blue_letter_m_alphabet_letters_icon.svg'
import style from './header.module.css'


function Header(props) {

    return (
        <div className={style.header}>
            <div className="header-logo">
                    <img src={aLetter} alt=""/>
                    <img src={mLetter} alt=""/>
            </div>
        </div>

    );
}

export default Header;