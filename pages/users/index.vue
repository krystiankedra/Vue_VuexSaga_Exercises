<template>
  <v-container>
    <users-wrapper :users="users" :navigation-to-details="navigationToDetails" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapSagas } from 'vuex-saga'
import { GET_USERS, GET_DATA_FOR_USERS_PAGE } from '~/store/actionTypes'

const usersWrapper = () => import('~/components/UsersWrapper/usersWrapper')

export default {
  components: {
    usersWrapper
  },
  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },
  methods: {
    ...mapSagas({
      'getDataForUsersPage': GET_DATA_FOR_USERS_PAGE
    }),
    navigationToDetails(id) {
      this.$router.push(`/users/${id}`)
    }
  },
  created() {
    this.getDataForUsersPage()
      .then(response => this.$store.dispatch(GET_USERS, response))
  }
}
</script>