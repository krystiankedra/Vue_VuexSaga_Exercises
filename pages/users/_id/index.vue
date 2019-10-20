<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapSagas } from 'vuex-saga'
import { GET_USER, GET_DATA_FOR_USER_PAGE } from '~/store/actionTypes'

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapSagas({
      'getDataForUserPage': GET_DATA_FOR_USER_PAGE
    }),
  },
  created() {
    this.getDataForUserPage(this.$route.params.id)
      .then(response => this.$store.dispatch(GET_USER, response))
  }
}
</script>