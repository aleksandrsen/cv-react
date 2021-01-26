import React from "react";
import "./index.scss";

const NavPanel = ({ nav, name, activeHash, handleHash }) => (
    <aside className="navPanel">
        <div className="navPanel__header">{name}</div>
        <ul className="navPanel__list">
            {nav.map((item) => (
                <li key={item}>
                    <a href={`#${item}`} className={activeHash === `#${item}` ? "active" : ""} onClick={handleHash}>
                        {item.toUpperCase()}
                    </a>
                </li>
            ))}
        </ul>
    </aside>
);

export default NavPanel;
