<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header'

export default {
  name: 'app',
  components: {
  	appHeader: header
  },
  created() {
  	this.$store.dispatch('article', this);
  	this.$store.dispatch('userData', this);
  }
}
</script>

<style>

</style>
