<template>
  <v-row justify="center" align-content="center" class="mt-12">
    <v-col cols="4">
      <v-card>
        <v-app-bar color="primary" dark>
          <v-card-title>Login</v-card-title>
        </v-app-bar>
        <v-col class="pa-8">
          <v-text-field label="Email" v-model="email" dense></v-text-field>
          <v-text-field label="Password" v-model="password" dense></v-text-field>
          <p v-if="error">{{ error }}</p>
        </v-col>
        <v-col class="text-right">
          <v-btn color="primary" @click="submit">Login</v-btn>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Cookies from 'js-cookie'
import axios from '@/lib/axios'

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
      error: '' as string | unknown
    }
  },
  methods: {
    async submit() {
      // axios({
      //   method : 'POST',
      //   url    : 'http://localhost:8000/api/login',
      //   // url    : 'https://jwt-axios-test.herokuapp.com/api/login',
      //   data   : { email: this.email, password: this.password },
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Access': 'application/json'
      //   },
      // })
      // .then(response => Cookies.set('_myapp_token', response.data.access_token))

      const response = await axios.post('/login', {
        email: this.email,
        password: this.password,
      })
      Cookies.set('_myapp_token', response.data.access_token)
    }
  }
})
</script>
