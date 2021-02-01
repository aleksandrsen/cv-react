import React from "react";
import "./index.scss";

const Home = ({ id, name, componentRef }) => (
    <section className="home sectionItem" id={id} ref={componentRef}>
        <svg>
            <clipPath id="textClip" className="filled-heading">
                <text id="firstLine" y="100">
                    Hello, I'm
                </text>
                <text id="secondLine" y="160">
                    {name}
                </text>
                <text id="thirdLine" y="220">
                    Frontend developer
                </text>
            </clipPath>

            <g id="background" clipPath="url(#textClip)">
                <use href="#firstLine" />
                <use href="#secondLine" />
                <use href="#thirdLine" />
            </g>
        </svg>
    </section>
);

export default Home;
