<template>
<div class="app">
<app-header></app-header>

  <transition name="box-fade" mode="out-in">
    <router-view/>
  </transition>

  <app-footer></app-footer>
</div>
</template>

<script>
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'
export default {
  components: {
    appFooter,
    appHeader
  }
  
}
</script>

<style>
html {
  padding: 0;
  margin: 0;
  scroll-behavior:smooth;
}

body {
  margin: 0;
  padding: 0;

}

.app {
  font-family: 'Rambla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh
  
}

.box-fade-enter-from,
.box-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.box-fade-enter-active,
.box-fade-leave-active {
  transition: all 0.3s ease;
}

.box-fade-enter-to,
.box-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
