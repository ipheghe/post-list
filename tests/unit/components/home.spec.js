import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/components/TimeTravel.vue';
import TimeTravel from '@/components/TimeTravel.vue';

const localVue = createLocalVue();
Vue.use(Vuex);
Vue.use(Vuetify);

const store = new Vuex.Store({
  state: {
    posts: [],
    apiUrl: 'https://jsonplaceholder.typicode.com/posts',
    timeTravelData: []
  }
});

describe('Home.vue', () => {
  it('mounts component successfully', () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });
    expect(wrapper.is(Home)).toBe(true);
    expect(wrapper.contains(TimeTravel)).toBe(true);
  });
});
