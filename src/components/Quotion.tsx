import React from 'react';

type PropsType = {
    children: React.ReactNode
};

const quotionStyle = {
    paddingLeft: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    background: "#f0f0f0",
    border: "solid black 1px",
    fontStyle: "italic"
};

const Quotion = ({ children }: PropsType) => {
    return <blockquote style={quotionStyle}>{ children }</blockquote>
};

export default Quotion;