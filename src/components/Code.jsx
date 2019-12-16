import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";
import { render } from "react-dom";

const style = {
  width: 130,
  marginLeft: 30,
  marginRight: 30,
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
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default Code;
