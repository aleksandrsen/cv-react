import React from "react";
import "./index.scss";

const Skills = ({ id, skills: { technical, language }, componentRef }) => (
    <section className="skills sectionItem" id={id} ref={componentRef}>
        <h2 className="sectionItemHeader">{id}</h2>
        <div className="skills__wrapper">
            <h2>{technical.title}</h2>
            <ul className="skills__technicalList">
                {technical.list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="skills__wrapper">
            <h2>{language.title}</h2>
            <ul className="skills__languageList">
                {language.list.map(({ lang, level }) => (
                    <li key={lang}>
                        {lang} - {level}
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default React.memo(Skills);
