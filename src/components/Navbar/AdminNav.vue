<template>
  <v-card
    class="mx-auto"
    width="256"
    tile
  >
      <v-list>
        <v-list-item link>
          <v-list-item-content v-if="loginData">
            <v-list-item-title class="text-h6">
              {{loginData.name}} 様
            </v-list-item-title>
            <v-list-item-subtitle>{{loginData.email}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action v-if="loginData">
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >

      <v-list-group
        prepend-icon="mdi-web"
      >
        <template v-slot:activator>
          <v-list-item-title class="text-center">ホーム</v-list-item-title>
        </template>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-clipboard-list-outline"
      >
        <template v-slot:activator>
          <v-list-item-title class="text-center">リスト</v-list-item-title>
        </template>
        <v-list-item v-for="(list, i) in lists" :key="i" link :to="list.link">
          <v-list-item-title class="text-center">{{ list.text }}</v-list-item-title>
          <v-list-item-icon><v-icon>{{ list.icon }}</v-icon></v-list-item-icon>
        </v-list-item>
      </v-list-group>



    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AdminNav',
  data() {
    return {
      selectedItem: 0,
      lists: [
        { text: 'ホーム', icon: 'mdi-web', link: '/admin' },
        { text: 'リスト', icon: 'mdi-silverware-variant', link: '/admin/all_lists'},
        { text: 'コンタクト', icon: 'mdi-note-edit', link: '/contact' },
        { text: 'お知らせ', icon: 'mdi-folder-account', link: '/create/news'},
      ]
    }
  },
  computed: {
    loginData() {
      return this.$store.state.loginData
    }
  },
})
</script>