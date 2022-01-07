<template>
  <h1>{{ loginData.name }}</h1>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'OwnerHome',
  data() {
    return {}
  },
  computed: {
    loginData() {
      return this.$store.state.loginData
    }
  }
})
</script>
