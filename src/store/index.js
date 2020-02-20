import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '52yy'
  },
  mutations: {
    setUsername (state, currentUser) {
      state.username = currentUser
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUsername: state => {
      return state.username
    }
  }
})
