import store from '../../../src/store';
import { posts } from '../../../src/fixtures';

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({ data: [{ id: 1 }, { id: 2 }, { id: 3 }] })
  )
}));

describe('actions', () => {
  it('should call the moveUp action', () => {
    const index = 1;
    const item = posts[1];

    expect(store.state.timeTravelData.length).toEqual(0);
    store.dispatch('moveUp', { index, item });
    expect(store.state.timeTravelData.length).toEqual(1);
  });

  it('should call the moveDown action', () => {
    const index = 1;
    const item = posts[1];

    expect(store.state.timeTravelData.length).toEqual(1);
    store.dispatch('moveDown', { index, item });
    expect(store.state.timeTravelData.length).toEqual(2);
  });

  it('should call the timeTravel action', () => {
    expect(store.state.timeTravelData.length).toEqual(2);
    store.dispatch('timeTravel', { index: 1 });
    expect(store.state.timeTravelData.length).toEqual(1);
  });

  it('should call the getPosts action', async () => {
    expect(store.state.timeTravelData.length).toEqual(1);
    await store.dispatch('getPosts', {});
    expect(store.state.posts.length).toEqual(3);
  });
});
