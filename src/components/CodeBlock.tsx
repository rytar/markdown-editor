import React from 'react';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light';

const CodeBlockWrapper = styled.div`
    position: relative;
`;

const CodeBlockTitle = styled.div`
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #ccc;
    padding: 0.3em;
    color: #000;
    opacity:0.9
`;

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
    if (inline) {
        return <code className={className} style={{ background: "#F5F7FF", padding: "0.2em" }}>{children}</code>;
    }
    const match = /language-(\w+)(:.+)?/.exec(className || '');
    const lang = match && match[1] ? match[1] : '';
    const name = match && match[2] ? match[2].slice(1) : '';
    return (
        <CodeBlockWrapper>
            <CodeBlockTitle>{ name }</CodeBlockTitle>
            <SyntaxHighlighter
                style={theme}
                language={lang}
                children={String(children).replace(/\n$/, '')}
            />
        </CodeBlockWrapper>
    );
};

export default CodeBlock;