import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-one_dark";

type PropsType = {
    onChange: (t: string) => void
};

const Editor: React.FC<PropsType> = ({ onChange }) => {
    return (
        <AceEditor
            mode="markdown"
            theme="one_dark"
            onChange={onChange}
            width="50%"
            height="100%"
        />
    );
};

export default Editor;