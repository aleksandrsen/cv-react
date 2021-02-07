import React, { useState } from "react";
import "./index.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.03];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PortfolioItem = ({ project: { name, link, git, screenshots } }) => {
    // const screenshots = images.map((item) => `http://localhost:3000${item}`);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 150, friction: 70 } }));

    const toggleIsOpen = (e) => setIsOpen(!isOpen);

    return (
        <li key={name} className="portfolioItem">
            <animated.div
                className="portfolioItem__previewCard"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <img src={screenshots[activeIdx]} alt={name} onClick={toggleIsOpen} />
            </animated.div>
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
                    enableZoom={false}
                    onCloseRequest={toggleIsOpen}
                    mainSrc={screenshots[activeIdx]}
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
