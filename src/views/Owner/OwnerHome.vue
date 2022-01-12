<template>
  <v-container>
    <v-row>
      <v-col>
        <v-col>
          <h1 class="text-center">{{ loginData.name }}</h1>
          <!-- <div class="text-right">
            <v-btn color="primary">create menu</v-btn>
          </div> -->
        </v-col>
          <v-col v-for="menu in ownerMenus" :key="menu.id" md="2" class="d-inline-flex">
            <Menu :menu="menu" />
          </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Menu from '@/components/Menu.vue'


export default defineComponent({
  name: 'OwnerHome',
  components: { Menu },
  data() {
    return {
      id: this.$route.query.id
    }
  },
  computed: {
    loginData() {
      return this.$store.state.loginData
    },
    ownerMenus() {
      return this.$store.state.ownerMenus
    }
  },
  methods: {
    getMenu() {
      this.$store.dispatch('getOwnerMenu', { id: this.id })
    }
  },
  created() {
    this.getMenu()
  }
})
</script>
