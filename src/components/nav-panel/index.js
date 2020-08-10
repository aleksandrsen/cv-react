import React from "react";
import "./index.scss";
import { useLocation } from "react-router-dom";

const NavPanel = ({ nav }) => {
    const location = useLocation();
    return (
        <aside className="navPanel">
            <div className="navPanel__header">Aleksandr Oksen</div>
            <ul className="navPanel__list">
                {nav.map((item) => (
                    <li key={item}>
                        <a href={`#${item}`} className={location.hash === `#${item}` ? "active" : ""}>
                            {item.toUpperCase()}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default NavPanel;
