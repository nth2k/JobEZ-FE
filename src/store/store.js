import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state() {
    return {
      count: 1000,
      transaction: null
    }
  },
  mutations: {

  },
  actions: {
    fetchTransaction(commit, {id}) {
      console.log(commit);
      console.log(id)
    }
  }
})