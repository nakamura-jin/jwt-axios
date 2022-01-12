<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <!--  -->
      <AdminNav />
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
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
import AdminNav from '@/components/Navbar/AdminNav.vue'


export default defineComponent({
  name: 'App',
  components: { HeaderNav, AdminNav },
  data() {
    return {
      drawer: null
    }
  },
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
