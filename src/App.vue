<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      v-if="this.$store.state.gift.length == 0"
    >
      <!--  -->
      <AdminNav v-if="loginData.type_id == 1" />
      <OwnerNav v-if="loginData.type_id == 2" />
      <UserNav v-if="loginData.type_id == 3" />
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark v-if="this.$store.state.gift.length == 0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <HeaderNav />
    </v-app-bar>

    <v-app-bar app flat v-else class="d-flex justify-center">
      <v-toolbar-title class="font-weight-bold">{{ gift.owner_name }}</v-toolbar-title>
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
import OwnerNav from '@/components/Navbar/OwnerNav.vue'
import UserNav from '@/components/Navbar/UserNav.vue'



export default defineComponent({
  name: 'App',
  components: { HeaderNav, AdminNav, OwnerNav, UserNav },
  data() {
    return {
      drawer: false
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
    },

    gift() {
      return this.$store.state.gift
    }
  }
})
</script>
