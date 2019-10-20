import Vue from 'vue'
import Vuex from 'vuex'
import VuexSaga from 'vuex-saga'

import rootSaga from '~/store/rootSaga'
import users from '~/store/users'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      rootSaga,
      users
    }
  })
}

Vue.use(VuexSaga, { store: createStore() })

export default createStore
