import React, { useState } from "react";
import "./index.scss";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = ({ nav, activeHash }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = ({ isOpen }) => setIsOpen(isOpen);

    const closeMenu = (e) => setIsOpen(false);

    return (
        <div className="burgerMenuWrapper">
            <Menu isOpen={isOpen} onStateChange={handleStateChange}>
                {nav.map((item) => (
                    <a
                        key={item}
                        id={`burger-${item}`}
                        className={activeHash === `#${item}` ? "active" : ""}
                        onClick={closeMenu}
                        href={`#${item}`}
                    >
                        {item.toUpperCase()}
                    </a>
                ))}
            </Menu>
        </div>
    );
};

export default BurgerMenu;
