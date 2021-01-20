import React, { useState } from "react";
import "./index.scss";

const NavPanel = ({ nav, name }) => {
    const [activeHash, setActiveHash] = useState(window.location.hash);

    return (
        <aside className="navPanel">
            <div className="navPanel__header">{name}</div>
            <ul className="navPanel__list">
                {nav.map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item}`}
                            className={activeHash === `#${item}` ? "active" : ""}
                            onClick={(e) => setActiveHash(e.target.hash)}
                        >
                            {item.toUpperCase()}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default NavPanel;
