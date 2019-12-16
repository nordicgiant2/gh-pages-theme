import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";

const defaultStyle = {
  padding: "8px 20px"
};

const exampleCode = `
import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class Example extends Component {
  render () {
    return (
      <>
        <div>...</div>
        <ParticlesBg type="circle" bg={true} />
      </>
    )
  }
}
`;

const Code = () => (
  <Highlight {...defaultProps} code={exampleCode} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => {
      const fStyle = Object.assign(defaultStyle, style);

      return (
        <pre className={className} style={fStyle}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )
    }}
  </Highlight>
);

export default Code;
