import React, { useEffect, useState } from "react";
import NavPanel from "../nav-panel";
import ScrollContainer from "../scroll-container";
import { MAIN_INFO, NAVIGATION_ITEMS } from "../../utils/data";

const NavWrapper = ({ children }) => {
    const [activeHash, setActiveHash] = useState("#home");

    const handleHash = (id) => {
        setActiveHash(`#${id}`);
        window.location.hash = `#${id}`;
    };

    useEffect(() => {
        setActiveHash(window.location.hash);
        window.onhashchange = (e) => setActiveHash(window.location.hash);
    }, []);

    return (
        <>
            <NavPanel nav={NAVIGATION_ITEMS} name={MAIN_INFO.about.name} activeHash={activeHash} />
            <ScrollContainer handleHash={handleHash} activeHash={activeHash}>
                {children}
            </ScrollContainer>
        </>
    );
};

export default NavWrapper;
