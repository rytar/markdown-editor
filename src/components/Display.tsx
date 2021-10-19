import React from 'react';
import ReactMarkdown from 'react-markdown';
import Heading from './Heading';
import CodeBlock from './CodeBlock';
import Quotion from './Quotion';

type PropsType = {
    text: string
};

const Display: React.FC<PropsType> = ({ text }) => {
    return (
        <div style={{ width: "50%", height: "94%", padding: "1rem", overflow: "auto" }}>
            <ReactMarkdown
                children={text}
                components={{
                    h1: Heading,
                    h2: Heading,
                    h3: Heading,
                    h4: Heading,
                    h5: Heading,
                    h6: Heading,
                    code: CodeBlock,
                    blockquote: Quotion,
                }}
            />
        </div>
    );
};

export default Display;