import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: [{ text: 'Jordan Rocha', timestamp: moment() }]
  },
  mutations: {
    changeName (state, n) {
      state.name.push({ text: n, timestamp: moment() })
    }
  },
  actions: {

  }
})
