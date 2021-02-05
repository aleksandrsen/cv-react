import React, { useEffect, useState } from "react";

const ScrollContainer = ({ children, activeHash }) => {
    const [refsCollection, setRefsCollection] = useState({});

    useEffect(() => {
        const collection = {};
        React.Children.forEach(children, (childNode) => (collection[`#${childNode.props.id}`] = React.createRef()));
        setRefsCollection(collection);
    }, [children]);

    useEffect(() => {
        if (activeHash && refsCollection[activeHash]?.current) {
            refsCollection[activeHash].current.scrollIntoView();
        }
    }, [activeHash, refsCollection]);

    return (
        <div className="app__scrollContainer">
            {Object.values(refsCollection).length &&
                React.Children.map(children, (childNode) =>
                    React.cloneElement(childNode, { componentRef: refsCollection[`#${childNode.props.id}`] })
                )}
        </div>
    );
};

export default ScrollContainer;
