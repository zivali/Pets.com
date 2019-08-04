<template>
  <div id="app">
    <Navbar />
    <HelloWorld/>
  </div>
</template>
<script>
 import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/Navbar.vue';  
  export default {
    name: 'navbar',
    components: {
      Navbar,
      HelloWorld
    }
  }
</script>