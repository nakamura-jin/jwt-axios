<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="sessionId"
    />
    <v-btn @click="submit">Checkout!</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
import { PaymentCheckOut } from '@/apis/menu_apis'



export default defineComponent({
  components: {
    StripeCheckout,
  },
  data () {
    return {
      loading: false,
      sessionId: '', // session id from backend
      publishableKey: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY
    };
  },
  methods: {
    async submit () {
      const response = await PaymentCheckOut(1)
      this.sessionId = response;
      // // You will be redirected to Stripe's secure checkout page
      (this.$refs.checkoutRef as HTMLFormElement).redirectToCheckout();
    },
  },
})
</script>
