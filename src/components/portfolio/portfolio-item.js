import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const PortfolioItem = ({ project: { name, link, git, screenshots } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <li key={name} className="portfolioItem">
            <img src={screenshots[activeIdx]} alt={name} onClick={(e) => setIsOpen(true)} />
            <span>{name}</span>
            <div className="links">
                <a href={link} target="blank">
                    View online{" "}
                    <svg>
                        <use xlinkHref="#link-icon" />
                    </svg>
                </a>
                <a href={git} target="blank">
                    Git repository
                    <svg>
                        <use xlinkHref="#link-icon" />
                    </svg>
                </a>
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={screenshots[activeIdx]}
                    onCloseRequest={() => setIsOpen(false)}
                    nextSrc={screenshots[(activeIdx + 1) % screenshots.length]}
                    prevSrc={screenshots[(activeIdx + screenshots.length - 1) % screenshots.length]}
                    onMoveNextRequest={() => setActiveIdx((activeIdx + 1) % screenshots.length)}
                    onMovePrevRequest={() => setActiveIdx((activeIdx + screenshots.length - 1) % screenshots.length)}
                />
            )}
        </li>
    );
};

export default PortfolioItem;
