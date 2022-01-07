<template>
  <div>
    <div v-if="loginData.length == 0">
      <v-btn text to="/login">Login</v-btn>
      <v-btn text to="/register">Register</v-btn>
    </div>
    <div v-else>
      <v-btn text @click="logout">Logout</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Cookies from 'js-cookie'

export default defineComponent({
  name: 'HeaderNav',
  methods: {
    logout() {
      this.$store.commit('LOGOUT')
      Cookies.remove('_myapp_token')
      this.$router.push('/')
    }
  },
  computed: {
    loginData() {
      return this.$store.state.loginData
    }
  }
})
</script>
