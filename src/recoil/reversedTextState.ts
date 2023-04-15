import { selector } from 'recoil';
import textState from './textState';

const reversedTextState = selector({
  key: 'reversedTextState',
  get: ({ get }) => {
    const text = get(textState);

    return text.split('').reverse().join('');
  },
});

export default reversedTextState;
