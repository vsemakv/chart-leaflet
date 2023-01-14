<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from  '@/components/VNavigation.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
* { 
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>