<template>
  <section id="home">
<<<<<<< HEAD

  <app-landing></app-landing>
  <app-skills></app-skills>
  <app-projects></app-projects>
  
=======
    <app-landing></app-landing>
    <app-skills></app-skills>
    <app-projects></app-projects>
>>>>>>> a9cc423 (Changed styles for landing component)
  </section>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import appLanding from '../components/Landing.vue'
import appProjects from '../components/Projects.vue'
import appSkills from '../components/Skills.vue'
=======
import appLanding from "../components/Landing.vue";
import appProjects from "../components/Projects.vue";
import appSkills from "../components/Skills.vue";
>>>>>>> a9cc423 (Changed styles for landing component)
export default {
  components: {
    appSkills,
    appProjects,
<<<<<<< HEAD
    appLanding
  }
}
=======
    appLanding,
  },
};
>>>>>>> a9cc423 (Changed styles for landing component)
</script>


<style scoped>
<<<<<<< HEAD

=======
>>>>>>> a9cc423 (Changed styles for landing component)
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
<<<<<<< HEAD

=======
>>>>>>> a9cc423 (Changed styles for landing component)
</style>