import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  me: {},
};

const mutations = {
  setMe(state, {me}) {
    state.me = me;
  },
}

const getters = {
  getMyUuid: (state) => state.me.uuid,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
