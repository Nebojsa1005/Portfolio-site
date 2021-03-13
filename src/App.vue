<template>
  <div class="app">
    <app-header></app-header>
    <router-view v-slot="{ Component }">
      <transition name="box-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appFooter from "./components/Footer.vue";
export default {
  components: {
    appFooter,
    appHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

.app {
  font-family: "Rambla", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
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
