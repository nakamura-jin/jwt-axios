<template>
  <v-container>
    <v-row>
      <v-col md="4" class="mx-auto">
        <v-card class="mt-10 pa-6" color="lightgreen">
          <v-img :src="gift.menu_image" />
          <v-card-title>{{ gift.menu_name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  methods: {
    async getURL() {
      this.$store.dispatch('getGift', {url: this.$route.path})
    }
  },
  created() {
    this.getURL()
  },
  computed: {
    gift() {
      return this.$store.state.gift
    }
  }
})
</script>
