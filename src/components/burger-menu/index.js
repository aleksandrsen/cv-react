import React, { useState } from "react";
import "./index.scss";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = ({ nav, activeHash, handleHash }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = ({ isOpen }) => setIsOpen(isOpen);

    const handleHash_ = (e) => {
        handleHash(e);
        setIsOpen(false);
    };

    return (
        <div className="burgerMenuWrapper">
            <Menu isOpen={isOpen} onStateChange={handleStateChange}>
                {nav.map((item) => (
                    <a
                        key={item}
                        id={`burger-${item}`}
                        className={activeHash === `#${item}` ? "active" : ""}
                        onClick={handleHash_}
                        href={`/#${item}`}
                    >
                        {item.toUpperCase()}
                    </a>
                ))}
            </Menu>
        </div>
    );
};

export default BurgerMenu;
