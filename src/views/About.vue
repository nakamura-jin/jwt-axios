<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ user.name }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import User from '@/modules/users'
import { getUser } from '@/apis/user_api'

export default defineComponent({
  data() {
    return {
      user: [] as User | unknown
    }
  },
  async created() {
    // const response = await axios.get('/user')
    // this.user = response.data
    const response = await getUser()
    this.user = response
  }
})
</script>
