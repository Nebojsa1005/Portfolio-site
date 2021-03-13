<template>
  <section id="home">
    <app-landing></app-landing>
    <app-skills></app-skills>
    <app-projects></app-projects>
  </section>
</template>

<script>
// @ is an alias to /src
import appLanding from "../components/Landing.vue";
import appProjects from "../components/Projects.vue";
import appSkills from "../components/Skills.vue";
export default {
  components: {
    appSkills,
    appProjects,
    appLanding,
  },
};
</script>


<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
}
</style>