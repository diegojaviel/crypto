<template>
  <div>
    <HeroBanner/>
    <Stripe/>
    <Cards/>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue'
import Cards from '@/components/Cards.vue'
import Stripe from '@/components/Stripe.vue'


export default {
  name: 'HomeView',
  components: {
    HeroBanner,
    Stripe,
    Cards,
  }
}
</script>
