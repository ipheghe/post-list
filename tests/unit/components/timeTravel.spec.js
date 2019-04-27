import Vue from 'vue';
import Vuex from 'vuex';
import { spy } from 'sinon';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import TimeTravel from '@/components/TimeTravel.vue';
import { posts, timeTravelData } from '../../../src/fixtures';

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
    timeTravelData
  },
  getters: {
    posts: state => state.posts,
    timeTravelData: state => state.timeTravelData
  },
  mutations,
  actions
});

describe('TimeTravel.vue', () => {
  it('mounts component successfully', () => {
    const wrapper = shallowMount(TimeTravel, { store, localVue });
    expect(wrapper.is(TimeTravel)).toBe(true);
    expect(wrapper.contains('.time-travel__container')).toBe(true);
    expect(wrapper.findAll('.time-travel__card').length).toBe(1);
    expect(wrapper.contains('p')).toBe(true);
  });

  it('should call timeTravel method', () => {
    const wrapper = shallowMount(TimeTravel, { store, localVue });
    const timeTravelStub = spy(wrapper.vm, 'timeTravel');
    wrapper.vm.timeTravel({ index: 0 });

    wrapper
      .findAll('.time-travel__btn')
      .at(0)
      .trigger('click');
    expect(timeTravelStub.called).toBe(true);
  });
});
