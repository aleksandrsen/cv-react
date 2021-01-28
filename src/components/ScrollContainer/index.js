import React, { useEffect, useState } from "react";

const ScrollContainer = ({ children, activeHash, handleHash }) => {
    const [refsCollection, setRefsCollection] = useState({});
    const [coordsCollection, setCoordsCollection] = useState({});

    useEffect(() => {
        const collection = {};
        React.Children.forEach(children, (childNode) => (collection[childNode.props.id] = React.createRef()));
        setRefsCollection(collection);
    }, [children]);

    useEffect(() => {
        if (Object.values(refsCollection).length === children.length) {
            const coords_ = Object.entries(refsCollection).map(([key, ref]) => ({
                coords: ref.current.getBoundingClientRect(),
                id: key,
            }));
            setCoordsCollection(coords_);
        }
    }, [refsCollection, children]);

    const handleScroll = ({ target }) => {
        const scrollTop = target.scrollTop;

        const id = Object.values(coordsCollection).find(
            ({ coords: { top, bottom } }) => top - 300 < scrollTop && bottom > scrollTop
        ).id;
        if (id !== `#${activeHash}`) handleHash(id);
    };

    return (
        <div className="app__scrollContainer" onScroll={handleScroll}>
            {React.Children.map(children, (childNode) =>
                React.cloneElement(childNode, { componentRef: refsCollection[childNode.props.id] })
            )}
        </div>
    );
};

export default ScrollContainer;
