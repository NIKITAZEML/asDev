<template>
  <div id="app">
    <HeaderViews/>
    <router-view/>
  </div>
</template>

<script>
import HeaderViews from '@/components/HeaderViews.vue'

export default {
 
  components: {
    HeaderViews
  }
}
</script>

<style lang="scss">

</style>

