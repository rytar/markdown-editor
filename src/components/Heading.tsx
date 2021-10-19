import React from 'react';
import { HeadingComponent } from 'react-markdown/lib/ast-to-react';
import styled from 'styled-components';

const HeadingStyle = {
    paddingLeft: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    borderLeft: "solid black 2px",
    background: "#f4f4f4"
};

const Heading: HeadingComponent = ({ level, children }) => {
    if (level === 1) return <h1 style={ HeadingStyle }>{ children }</h1>;
    if (level === 2) return <h2 style={ HeadingStyle }>{ children }</h2>;
    if (level === 3) return <h3 style={ HeadingStyle }>{ children }</h3>;
    if (level === 4) return <h4 style={ HeadingStyle }>{ children }</h4>;
    if (level === 5) return <h5 style={ HeadingStyle }>{ children }</h5>;
    return <h6 style={ HeadingStyle }>{ children }</h6>;
};

export default Heading;