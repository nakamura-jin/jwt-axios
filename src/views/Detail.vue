<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
          <v-img :src="menuDetail.image" height="300" />
        </v-sheet>
        <v-sheet v-else>
          <div class="d-flex">
            <v-img :src="menuDetail.image" height="300" max-width="50%" />
            <v-col>
              <span class="d-block text-h6 mb-4">{{ menuDetail.name }}</span>
              <span class="d-block text-h6 mb-4">¥ {{ menuDetail.price }}</span>
              <p>{{ menuDetail.description }}</p>
              <v-col>
                <Quantity />
              </v-col>
              <v-btn class="px-12">ギフトを贈る</v-btn>
            </v-col>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Quantity from '@/components/Quantity.vue'

export default defineComponent({
  name: 'Detail',
  components: { Quantity },
  data(){
    return {
      id: this.$route.query.menu_id
    }
  },
  methods: {
    getMenuDetail() {
      this.$store.dispatch('menuDetail', {id: this.id})
    }
  },
  created() {
    this.getMenuDetail()
  },
  computed: {
    menuDetail() {
      return this.$store.state.menuDetail
    }
  }
})
</script>
