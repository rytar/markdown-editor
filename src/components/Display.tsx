import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

type PropsType = {
    text: string
};

const Display: React.FC<PropsType> = ({ text }) => {
    return (
        <div style={{ width: "46%", height: "96%", margin: "2%" }}>
            <ReactMarkdown
                children={text}
                components={{
                    code: CodeBlock,
                }}
            />
        </div>
    );
};

export default Display;