import React from "react";
import "./index.scss";
import {slide as Menu} from "react-burger-menu";


const BurgerMenu = ({nav}) => {


    return <Menu>
        <a id="home-burger" className="menu-item" href="/#home">Home</a>
        <a id="about1" className="menu-item" href="/#about">About</a>
        <a id="contact1" className="menu-item" href="/#contact">Contact</a>
    </Menu>
}

export default BurgerMenu;