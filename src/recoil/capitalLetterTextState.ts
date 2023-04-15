import { selector } from 'recoil';
import textState from './textState';

const capitalLetterTextState = selector({
  key: 'capitalLetterTextState',
  get: ({ get }) => {
    const text = get(textState);

    return text.toUpperCase();
  },
});

export default capitalLetterTextState;
