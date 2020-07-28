<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Ly />
  <router-link to="/">Home</router-link> 
  <!-- <router-link to="/contact">Contact</router-link> -->
  <router-view/>
</div>
</template>

<script>
import Ly from './components/lyly/Ly.vue';

export default {
  name: 'App',
  components: {
    Ly
  }
}
</script>
