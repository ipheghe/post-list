import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    apiUrl: 'https://jsonplaceholder.typicode.com/posts',
    timeTravelData: []
  },
  mutations: {
    /**
     * Mutation Function to set posts
     *
     * @param {object} state - state object
     * @param {array} payload - posts
     * @return {void}
     */
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    /**
     * Mutation Function to set time travel data
     *
     * @param {object} state - state object
     * @param {array} payload - timeTravelData
     * @return {void}
     */
    setTimeTravel: (state, payload) => {
      state.timeTravelData = payload;
    }
  },
  actions: {
    /**
     * Action to get posts
     *
     * @param {object} { state, commit } - state object, commit function
     * @return {void}
     */
    getPosts: async ({ state, commit }) => {
      try {
        let response = await axios.get(`${state.apiUrl}`);
        const slicedPosts = response.data.slice(0, 5);
        commit('setPosts', slicedPosts);
      } catch (error) {
        commit('setPosts', []);
      }
    },
    /**
     * Action to Move Down
     *
     * @param {object} { state, commit } - state object, commit function
     * @param {object} { index, item } - index position of post, post item
     * @return {void}
     */
    moveUp: ({ state, commit }, { index, item }) => {
      const newState = [...state.posts];
      const previousState = [...state.posts];
      const newTimeTravelData = [...state.timeTravelData];
      const postIndex = newState[index];
      const postBeforeIndex = newState[index - 1];
      newState[index] = postBeforeIndex;
      newState[index - 1] = postIndex;
      const timeTravelData = {
        currentIndex: index,
        previousIndex: index + 1,
        postId: item.id,
        state: previousState
      };
      newTimeTravelData.push(timeTravelData);

      commit('setPosts', newState);
      commit('setTimeTravel', newTimeTravelData);
    },
    /**
     * Action to Move Down
     *
     * @param {object} { state, commit } - state object, commit function
     * @param {object} { index, item } - index position of post, post item
     * @return {void}
     */
    moveDown: ({ state, commit }, { index, item }) => {
      const newState = [...state.posts];
      const previousState = [...state.posts];
      const newTimeTravelData = [...state.timeTravelData];
      const postIndex = newState[index];
      const postBeforeIndex = newState[index + 1];
      newState[index] = postBeforeIndex;
      newState[index + 1] = postIndex;
      const timeTravelData = {
        currentIndex: index + 2,
        previousIndex: index + 1,
        postId: item.id,
        state: previousState
      };
      newTimeTravelData.push(timeTravelData);

      commit('setPosts', newState);
      commit('setTimeTravel', newTimeTravelData);
    },
    /**
     * Action to time travel
     *
     * @param {object} { state, commit } - state object, commit function
     * @param {object} { index } - index position of time travel card
     * @return {void}
     */
    timeTravel: ({ state, commit }, { index }) => {
      const timeTravelData = [...state.timeTravelData];
      const currentTimeTravelData = timeTravelData[index].state;
      commit('setPosts', currentTimeTravelData);
      const newTimeTravelData = timeTravelData.slice(
        0,
        -1 * (timeTravelData.length - index)
      );
      commit('setTimeTravel', newTimeTravelData);
    }
  },
  getters: {
    /**
     * method to return posts from state
     *
     * @return {array} - posts from state
     */
    posts: state => state.posts,
    /**
     * method to return timeTravelData from state
     *
     * @return {array} - timeTravelData from state
     */
    timeTravelData: state => state.timeTravelData
  }
});
