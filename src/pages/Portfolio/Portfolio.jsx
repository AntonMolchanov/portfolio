import React from 'react';
import style from './portfolio.module.css'
import slay from '../../img/slay.svg'
import html from '../../img/tech/294678_html5_icon.svg'
import css from '../../img/tech/294692_css3_icon.svg'
import js from '../../img/tech/652581_code_command_develop_javascript_language_icon.svg'
import sass from '../../img/tech/4375066_logo_sass_icon.svg'
import gulp from '../../img/tech/4691255_gulp_icon.svg'
import arrow from '../../img/arrow.svg'
import react from '../../img/tech/7423887_react_react native_icon.svg'
import redux from '../../img/tech/4691205_redux_icon.svg'
import mongoose from '../../img/tech/3406432_animal_mammal_meerkat_mongoose_suricate_icon.svg'
import mongodb from '../../img/tech/1012822_code_development_logo_mongodb_programming_icon.svg'
import mui from '../../img/tech/material-ui-1.svg'
import jss from '../../img/tech/jss-logo-2B9BC9020D-seeklogo.com.png'
import bitl from '../../img/bitl.svg'
import originalite from '../../img/Originalité.svg'
import flug from '../../img/flugzeugmarkt.png'

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
                        <p className={style.subText}>Responsibilities:</p>
                        <ul className={style.techList}>
                            <li className={style.technologyItem}>
                                <p className={style.technology}>Solo Project</p>
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
                        <li className={style.technologyItem}>
                            <p className={style.technology}>MongoDB</p>
                            <img className={style.techIcon} src={mongodb} alt="mongodb"/>
                        </li>
                    </ul>

                    <p className={style.subText}>Responsibilities:</p>
                    <ul className={style.techList}>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Solo Project</p>
                        </li>
                    </ul>
                </div>

                <div className={style.jobItem}>
                    <div className={style.jobIcon}>
                        <a href="https://ilonas-recipes.herokuapp.com/" target="_blank" className={style.ilonaLogo}>
                            <img src={bitl} alt="BITL"/>
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
                            <p className={style.technology}>SASS/SCSS</p>
                            <img className={style.techIcon} src={sass} alt="SASS/SCSS"/>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Material UI</p>
                            <img className={style.techIcon} src={mui} alt="MUI"/>
                        </li>
                    </ul>

                    <p className={style.subText}>Responsibilities:</p>
                    <ul className={style.techList}>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Header</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Aside</p>
                        </li>
                    </ul>
                </div>

                <div className={style.jobItem}>
                    <div className={style.jobIcon}>
                        <a href="https://originalite-and-co.herokuapp.com" target="_blank" className={style.ilonaLogo}>
                            <img style={{width: "150px"}} src={originalite} alt="Originalite"/>
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
                            <p className={style.technology}>Formik</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Yup</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>MongoDB</p>
                            <img className={style.techIcon} src={mongodb} alt="mongodb"/>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Mongoose</p>
                            <img className={style.techIcon} src={mongoose} alt="Mongoose"/>
                        </li>
                    </ul>

                    <p className={style.subText}>Responsibilities:</p>
                    <ul className={style.techList}>
                        <li className={style.technologyItem}>
                            <p className={style.technology}> - Header (everything what's related to header and its functionality)</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}> - Footer</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}> - Static pages</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}> - Favourites feature</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}> - Brought in a project manager to the team</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}> - Together with a team mate managed the team of 4 junior developers</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}> - Together with a team mate created the project's roadmap, determined the code-style and project workflows</p>
                        </li>
                    </ul>
                </div>

                <div className={style.jobItem}>
                    <div className={style.jobIcon}>
                        <a href="https://flugzeugmarkt.herokuapp.com/" target="_blank" className={style.ilonaLogo}>
                            <img style={{width: "150px"}} src={flug} alt="flugzeugmarkt"/>
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
                            <p className={style.technology}>Formik</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Yup</p>
                        </li>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>SASS/SCSS</p>
                            <img className={style.techIcon} src={sass} alt="SASS/SCSS"/>
                        </li>
                    </ul>

                    <p className={style.subText}>Responsibilities:</p>
                    <ul className={style.techList}>
                        <li className={style.technologyItem}>
                            <p className={style.technology}>Solo Project</p>
                        </li>
                    </ul>
                </div>

            </div>

            <a href="https://www.linkedin.com/in/anton-molchanov-pdm" target="_blank"><p className={style.footerItem}>LinkedIn</p></a>
            <a href="https://www.facebook.com/anton.molchanov.3954/" target="_blank"><p className={style.footerItem}>Facebook</p></a>

        </div>
    );
}

export default Portfolio;