<template>
  <div>
    <h1>Home</h1>
    <div v-if="qrcode">{{ qrcode }}</div>
    <v-btn @click="qr">qrcode</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      qrcode: '',
      id: 1
    }
  },
  methods: {
    qr() {
      axios.post('/qrcode', { id: this.id})
      .then(res => {
        this.qrcode = res.data
        console.log(JSON.stringify(this.qrcode))
      })
    }
  }
})
</script>

