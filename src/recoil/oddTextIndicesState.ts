import { selector } from 'recoil';
import textState from './textState';

const oddTextIndicesState = selector({
  key: 'oddTextIndicesState',
  get: ({ get }) => {
    const text = get(textState);

    return text.split('').filter((c, i) => i % 2 === 0).join('');
  },
});

export default oddTextIndicesState;
