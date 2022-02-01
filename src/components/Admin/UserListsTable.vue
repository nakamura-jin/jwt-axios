<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center" width="10%">
            id
          </th>
          <th class="text-center">
            名前
          </th>
          <th class="text-center" v-show="$vuetify.breakpoint.mobile ? false : true">
            メールアドレス
          </th>
          <th class="text-center" width="10%">
            麺集
          </th>
          <th class="text-center" width="10%">
            削除
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in allUsers"
          :key="user.id"
          class="text-center"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td v-show="$vuetify.breakpoint.mobile ? false : true">{{ user.email }}</td>
          <td><v-btn text icon color="success"><v-icon>mdi-pencil</v-icon></v-btn></td>
          <td><v-btn text icon color="error"><v-icon>mdi-delete</v-icon></v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ListsResponse } from '@/apis/admin_lists'

export interface UserListsMethods {
  selectData: string
  getAllUser: void;
}

export default defineComponent({
  name: 'UserListsTable',
  props: {
    selectData: {
      type: String,
      required: true
    }
  },
  computed: {
    allUsers(): Array<ListsResponse> {
      let user = []
      for(let i = 0; i < this.$store.state.allUser.length; i++) {
        let select = this.$store.state.allUser[i]
        if(select.email.indexOf(this.selectData) !== -1 || select.name.indexOf(this.selectData) !== -1) {
          user.push(select)
        }
      }
      return user
    },
  },
  methods: {
    getAllUser() {
      this.$store.dispatch('getAllUser')
    }
  },
  created() {
    this.getAllUser()
  }
})
</script>
