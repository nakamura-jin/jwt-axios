<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ loginData.name }} - {{ loginData.email }}</h3>
    <v-btn @click="setUser">user</v-btn>
    <v-btn @click="goodbye">logout</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'

export default defineComponent({
  name: 'About',
  methods: {
    async setUser() {
      // const response = await getUser();
      // console.log(response)
      const response = await axios.get('/me')
      console.log(response)
    },
    goodbye() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed: {
    loginData() {
      return this.$store.state.loginData
    }
  },
})
</script>
