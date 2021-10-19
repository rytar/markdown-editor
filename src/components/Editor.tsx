import React from 'react';
import AceEditor from 'react-ace';
import { Ace } from 'ace-builds';

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools"

type PropsType = {
    text: string,
    onChange: (t: string) => void
};

const Editor: React.FC<PropsType> = ({ text, onChange }) => {
    return (
        <AceEditor
            mode="markdown"
            theme="one_dark"
            value={text}
            onChange={onChange}
            width="50%"
            height="100%"
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
            }}
        />
    );
};

export default Editor;