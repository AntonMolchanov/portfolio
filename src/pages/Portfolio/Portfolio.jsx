import React from 'react';
import style from './portfolio.module.css'
import slay from '../../components/img/salonLogo.svg'
import html from '../../components/img/tech/294678_html5_icon.svg'
import css from '../../components/img/tech/294692_css3_icon.svg'
import js from '../../components/img/tech/652581_code_command_develop_javascript_language_icon.svg'
import sass from '../../components/img/tech/4375066_logo_sass_icon.svg'
import gulp from '../../components/img/tech/4691255_gulp_icon.svg'
import arrow from './../../components/img/arrow.svg'
import react from './../../components/img/tech/7423887_react_react native_icon.svg'
import redux from './../../components/img/tech/4691205_redux_icon.svg'
import mongoose from './../../components/img/tech/3406432_animal_mammal_meerkat_mongoose_suricate_icon.svg'
import mongodb from './../../components/img/tech/1012822_code_development_logo_mongodb_programming_icon.svg'
import mui from './../../components/img/tech/material-ui-1.svg'
import jss from './../../components/img/tech/jss-logo-2B9BC9020D-seeklogo.com.png'

function Portfolio(props) {
    return (
        <div>
            <h3 className={style.heading}>Portfolio</h3>

            <div className={style.jobs}>
                    <div className={style.jobItem}>
                        <div className={style.jobIcon}>
                            <a href="https://slay.com.ua/" target="_blank">
                                <img src={slay} alt="SLAY"/>
                            </a>
                            <div className={style.hint}>
                                <img className={style.hintIcon} src={arrow} alt="click me"/>
                                <p className={style.hintText}>click me</p>
                            </div>
                        </div>
                        <p className={style.subText}>Technologies used in the project:</p>
                        <ul className={style.techList}>
                            <li className={style.technologyItem}>
                                <p className={style.technology}>HTML5</p>
                                <img className={style.techIcon} src={html} alt="HTML5"/>
                            </li>
                            <li className={style.technologyItem}>
                                <p className={style.technology}>CSS 3</p>
                                <img className={style.techIcon} src={css} alt="CSS3"/>
                            </li>
                            <li className={style.technologyItem}>
                                <p className={style.technology}>JavaScript</p>
                                <img className={style.techIcon} src={js} alt="JavaScript"/>
                            </li>
                            <li className={style.technologyItem}>
                                <p className={style.technology}>SASS/SCSS</p>
                                <img className={style.techIcon} src={sass} alt="SASS/SCSS"/>
                            </li>
                            <li className={style.technologyItem}>
                                <p className={style.technology}>GULP</p>
                                <img className={style.techIcon} src={gulp} alt="GULP"/>
                            </li>
                        </ul>
                    </div>

                <div className={style.jobItem}>
                    <div className={style.jobIcon}>
                        <a href="https://ilonas-recipes.herokuapp.com/" target="_blank" className={style.ilonaLogo}>
                            Ilona's Recipes
                        </a>
                        <div className={style.hint}>
                            <img className={style.hintIcon} src={arrow} alt="click me"/>
                            <p className={style.hintText}>click me</p>
                        </div>
                    </div>
                    <p className={style.subText}>Technologies used in the project:</p>
                    <ul className={style.techList}>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>React</p>
                            <img className={style.techIcon} src={react} alt="React"/>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Redux</p>
                            <img className={style.techIcon} src={redux} alt="Redux"/>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>SASS/SCSS</p>
                            <img className={style.techIcon} src={sass} alt="SASS/SCSS"/>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Mongoose</p>
                            <img className={style.techIcon} src={mongoose} alt="Mongoose"/>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Material UI</p>
                            <img className={style.techIcon} src={mui} alt="MUI"/>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>JSS</p>
                            <img className={style.techIcon} src={jss} alt="Mongoose"/>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Portfolio;