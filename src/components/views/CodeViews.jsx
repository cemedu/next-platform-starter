'use client'
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import './style.css';


const CodeViews = ({ code, fontSize }) => {
    return (
        <div>
            <Editor
                value={code}
                highlight={code => highlight(code, languages.js, 'javascript')}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: fontSize || 18,
                }}
            />
        </div>
    )
}

export default CodeViews;