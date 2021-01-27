import React, { useEffect, useState } from "react";

const ScrollContainer = ({ children }) => {
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
    }, [refsCollection]);

    const handleScroll = (e) => {
        // console.log(e);
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
