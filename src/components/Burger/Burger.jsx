import React,{useState} from 'react';
import Hamburger from "hamburger-react";
import BurgerMenu from "./BurgerMenu";

function Burger(props) {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#000000"/>
            {isOpen && <BurgerMenu/>}
        </div>
    );
}

export default Burger;