import React, { type ReactElement } from 'react';

const TextBox = (): ReactElement => {
  const text = 'Hello world';

  return (
        <div>{ text }</div>
  );
};

export default TextBox;
