import React, { type ReactElement } from 'react';
import { type RecoilValueReadOnly, useRecoilValue } from 'recoil';

interface TextBoxProps {
  recoilValue: RecoilValueReadOnly<string>
}

const TextBox = ({ recoilValue }: TextBoxProps): ReactElement => {
  const text = useRecoilValue(recoilValue);

  return (
        <div>{ text }</div>
  );
};

export default TextBox;
