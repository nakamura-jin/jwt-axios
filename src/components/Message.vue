<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Message',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>
