import store from '../../../src/store';

describe('getters', () => {
  it('returns posts from state', () => {
    const actual = store.getters.posts;
    expect(actual).toEqual([]);
  });

  it('returns timeTravelData from state', () => {
    const actual = store.getters.timeTravelData;
    expect(actual).toEqual([]);
  });
});
