import { SET_USERS, SET_USER } from '~/store/mutationTypes'

export default {
  getUsers({ commit }, payload) {
    commit(SET_USERS, payload)
  },
  getUser({ commit }, payload) {
    commit(SET_USER, payload)
  }
}