import React, { type ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import textState from '../recoil/textState';

const TextBox = (): ReactElement => {
  const text = useRecoilValue(textState);

  return (
        <div>{ text }</div>
  );
};

export default TextBox;
