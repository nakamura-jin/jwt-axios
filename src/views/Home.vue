<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" src="https://via.placeholder.com/640x480.png/003300?text=quasi" width="100%" height="300"></v-img>
        <v-img v-else src="https://via.placeholder.com/640x480.png/003300?text=quasi" width="100%" height="500"></v-img>

        <v-col>
          <!-- ここにアナウンス（お知らせ）のコンポーネントを入れる -->
        </v-col>

        <v-col>
          <!----- スマホ ----->
          <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
            <v-col v-for="menu in menus" :key="menu.id" cols="6" class="py-0 px-1 d-inline-flex">
              <Menu :menu="menu" />
            </v-col>
          </div>
          <!----- ここまでスマホ ----->

          <!----- PC ----->
          <v-sheet v-else>
            <v-slide-group>
              <v-slide-item v-for="menu in menus" :key="menu.id" class="d-inline-flex">
                <Menu :menu="menu" />
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!----- ここまでPC ----->
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Menu from '@/components/Menu.vue'

export default defineComponent({
  name: 'About',
  components: { Menu },
  data() {
    return {
      model: 0,
    }
  },
  methods: {
    getAllMenus() {
      this.$store.dispatch('getMenu')
    },
    // menuDetail(id) {
    //   this.$router.push({path: '/detail', query: { menu_id: id } })
    // }
  },
  created() {
    this.getAllMenus()
  },
  computed: {
    loginData() {
      return this.$store.state.loginData
    },
    menus() {
      return this.$store.state.menus
    }
  },
})
</script>
