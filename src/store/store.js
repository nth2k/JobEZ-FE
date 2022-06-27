import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state() {
    return {
      count: 1000,
      transaction: null,
      todos: [{ id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }]
    }
  },
  mutations: {
    setTransaction(state, transaction) {
      state.transaction = transaction;
    }
  },
  actions: {
    fetchTransaction({commit}, {id}) {
      commit("setTransaction", id);
    }
  },
  getters: {
    doneTodos : (state) => {
      return state.todos.filter(todo => todo.done);
    }
  }
})