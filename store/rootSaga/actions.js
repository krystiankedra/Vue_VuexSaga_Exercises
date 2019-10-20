import { call } from 'vuex-saga'
import * as api from '~/api/api'

export default {
  *getDataForUsersPage() {
    return yield call(api.getUsers)
  },
  *getDataForUserPage(_, id) {
    return yield call(api.getUser, id)
  }
}