import Vue from 'vue';
import Vuex from 'vuex';
import { spy } from 'sinon';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PostList from '@/components/PostList.vue';
import { posts } from '../../../src/fixtures';

const localVue = createLocalVue();
Vue.use(Vuex);
Vue.use(Vuetify);

const mutations = {
  setPosts: spy(),
  setTimeTravelData: spy()
};

const actions = {
  getPosts: spy(),
  moveUp: spy(),
  moveDown: spy(),
  timeTravel: spy()
};

const store = new Vuex.Store({
  state: {
    posts,
    apiUrl: 'https://jsonplaceholder.typicode.com/posts',
    timeTravelData: []
  },
  getters: {
    posts: state => state.posts,
    timeTravelData: state => state.timeTravelData
  },
  mutations,
  actions
});

describe('PostList.vue', () => {
  it('mounts component successfully', () => {
    const wrapper = shallowMount(PostList, { store, localVue });
    expect(wrapper.is(PostList)).toBe(true);
    expect(wrapper.classes('post-list__container')).toBe(true);
    expect(wrapper.contains('p')).toBe(true);
  });

  it('should call moveUp method', () => {
    const wrapper = shallowMount(PostList, { store, localVue });
    const moveUpStub = spy(wrapper.vm, 'moveUp');
    wrapper.vm.moveUp({ index: 1, item: posts[1] });

    wrapper
      .findAll('.arrow-btn-up')
      .at(0)
      .trigger('click');
    expect(moveUpStub.called).toBe(true);
  });
  it('should call moveDown method', () => {
    const wrapper = shallowMount(PostList, { store, localVue });
    const moveDownStub = spy(wrapper.vm, 'moveDown');
    wrapper.vm.moveDown({ index: 0, item: posts[0] });

    wrapper
      .findAll('.arrow-btn-down')
      .at(0)
      .trigger('click');
    expect(moveDownStub.called).toBe(true);
  });
});
