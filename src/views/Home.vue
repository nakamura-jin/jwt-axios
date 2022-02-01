<template>
  <v-container>
    <v-row>
      <v-col>
        <TodoApp />
        <v-img v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" src="https://cdn.pixabay.com/photo/2016/04/09/02/09/cherry-blossoms-1317308_1280.jpg" width="100%" height="300"></v-img>
        <v-img v-else src="https://cdn.pixabay.com/photo/2016/04/09/02/09/cherry-blossoms-1317308_1280.jpg" width="100%" height="500"></v-img>

        <v-col class="mt-8">
          <!-- ここにアナウンス（お知らせ）のコンポーネントを入れる -->
          <h4>お知らせ</h4>
          <v-sheet>
            <v-list-item two-line v-for="(item, i) in news" :key="i" @click="selectNews(item)">
              <v-list-item-content>
                <v-list-item-title class="d-flex font-weight-bold"><NewArrival :news="item" /> {{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-sheet>
        </v-col>

        <v-col>
          <!----- スマホ ----->
          <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
            <h4>おすすめ</h4>
            <v-col v-for="menu in menus" :key="menu.id" cols="6" class="py-0 px-1 d-inline-flex">
              <MenuCard :menu="menu" />
            </v-col>
          </div>
          <!----- ここまでスマホ ----->

          <!----- PC ----->
          <v-sheet v-else>
            <h4>おすすめ</h4>
            <v-slide-group>
              <v-slide-item v-for="menu in menus" :key="menu.id" class="d-inline-flex">
                <MenuCard :menu="menu" />
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!----- ここまでPC ----->
          <router-link to="/purchased">purchased</router-link>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MenuCard from '@/components/MenuCard.vue'
import Menu from '@/modules/menus'
import NewArrival from '@/components/NewArrival.vue'
import { News } from '@/apis/admin_lists'
import TodoApp from '@/components/TodoApp.vue'

export default defineComponent({
  name: 'About',
  components: { MenuCard, NewArrival, TodoApp },
  data() {
    return {
      model: 0,
      id: 1 as number,
      newArrivals: false,
    }
  },
  methods: {
    async getAllMenus() {
      this.$store.dispatch('getMenu')
      this.$store.dispatch('getNews')
    },
    selectNews(item: Array<News>) {
      console.log(item)
    }
  },
  created() {
    this.getAllMenus()
  },
  computed: {
    loginData() {

      return this.$store.state.loginData
    },
    menus(): Menu {
      return this.$store.state.menus
    },
    news(): News[] {
      let news = this.$store.state.allNews.slice().reverse();
      let newsList = [];
      for(let i = 0; i < news.length; i++) {
        let list = news[i];
        newsList.push(list);
        if(newsList.length == 3) {
          return newsList
        }
      }
      return this.$store.state.allNews
    }
  },
})
</script>
