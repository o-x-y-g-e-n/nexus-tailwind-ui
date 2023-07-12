import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeFormatter = ({ code }) => {
  return (
    <div>
      <SyntaxHighlighter language="jsx" style={vs}>
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeFormatter;
