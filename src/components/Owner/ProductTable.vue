<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center" width="20%">
            インストアコード
          </th>
          <th class="text-center">
            商品名
          </th>
          <th class="text-center" v-show="$vuetify.breakpoint.mobile ? false : true">
            商品説明
          </th>
          <th class="text-center" width="10%">
            金額
          </th>
          <th class="text-center" width="10%">
            在庫数
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="menu in menus"
          :key="menu.id"
          class="text-center"
        >
          <td>{{ menu.product_code }}</td>
          <td>{{ menu.name }}</td>
          <td class="text-left" v-show="$vuetify.breakpoint.mobile ? false : true">{{ menu.description }}</td>
          <td>{{ menu.price }}</td>
          <td>0</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { MenuResponse } from '@/modules/menus'

export default defineComponent({
  name: 'ProductTable',
  props: {
    menus: {
      type: Array as () => MenuResponse[],
      required: true
    }
  }
})
</script>
