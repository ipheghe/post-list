import store from '../../../src/store';
import { posts, timeTravelData } from '../../../src/fixtures';

describe('mutations', () => {
  it('should have a default posts set to "empty array"', () => {
    expect(store.state.posts).toEqual([]);
  });

  it('updates the posts in the state', () => {
    store.commit('setPosts', posts);

    expect(store.state.posts).toEqual(posts);
  });

  it('updates the timeTravelData in the state', () => {
    store.commit('setTimeTravel', timeTravelData);

    expect(store.state.timeTravelData).toEqual(timeTravelData);
  });
});
