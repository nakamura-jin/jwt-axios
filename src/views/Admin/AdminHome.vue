<template>
  <v-container>
    <v-row>
      <v-col>
        <TopPageOwnerCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TopPageOwnerCard from '@/components/Admin/TopPageOwnerCard.vue'

export default defineComponent({
  name: 'AdminHome',
  components: { TopPageOwnerCard }
})
</script>
