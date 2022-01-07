<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
          <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <router-link to="/">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <HeaderNav />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HeaderNav from '@/components/HeaderNav.vue'
import Cookies from 'js-cookie'

export default defineComponent({
  name: 'App',
  components: { HeaderNav },
  methods: {
    getLoginData() {
      if(Cookies.get('_myapp_token')) {
        this.$store.dispatch('getData')
      }
    }
  },
  created() {
    this.getLoginData()
  },
  computed: {
    loginData: function () {
      return this.$store.state.loginData
    }
  }
})
</script>
