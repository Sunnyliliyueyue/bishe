<template>
  <div>
    <Headers></Headers>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
  import Headers from './components/Header'
  import Footer from './components/Footer'
  export default {
    data() {
      return {
        key: value
      }
    },
    components:{
      Headers,
      Footer
    }
  }
</script>

<style lang="less" scoped>

</style>
