import React, { useState } from "react";
// Contacts
import NavPanel from "../nav-panel";
import BurgerMenu from "../burger-menu";
import { MAIN_INFO, NAVIGATION_ITEMS } from "../../utils/data";

const Nav = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash);

    const handleHash = ({ target: { hash } }) => setActiveHash(hash);

    return (
        <>
            <BurgerMenu nav={NAVIGATION_ITEMS} activeHash={activeHash} handleHash={handleHash} />
            <NavPanel
                nav={NAVIGATION_ITEMS}
                name={MAIN_INFO.about.name}
                activeHash={activeHash}
                handleHash={handleHash}
            />
        </>
    );
};

export default Nav;
