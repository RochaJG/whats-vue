import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Jordan Rocha'
  },
  mutations: {
    changeName (state, n) {
      state.name = n
    }
  },
  actions: {

  }
})
