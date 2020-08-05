import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const NavPanel = (props) => {
    const navigationItems = ["Home", "About", "Skills", "Experience", "Education", "Portfolio", "Contact"];

    return (
        <aside className="navPanel">
            <div className="navPanel__header">Aleksandr Oksen</div>
            <ul className="navPanel__list">
                {navigationItems.map((item) => (
                    <NavLink to={`/${item.toLowerCase()}`} activeClassName="active">
                        {item.toUpperCase()}
                    </NavLink>
                ))}
            </ul>
        </aside>
    );
};

export default NavPanel;
