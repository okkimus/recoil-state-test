import React, { type ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import textState from '../recoil/textState';

const TextField = (): ReactElement => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (value: string): void => {
    setText(value);
  };

  return (
    <input type="text" value={text} onChange={(e) => { onChange(e.currentTarget.value); }} />
  );
};

export default TextField;
