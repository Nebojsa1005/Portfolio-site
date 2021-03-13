<template>
<<<<<<< HEAD
    <section id="skills">
    <div class="white">
      <h2>My skills: </h2>
      <div id="skill-group">
          <div class="skill" v-for="skill in skills" :key="skill.id">
              <p>{{ skill.title }}</p>
              <span v-html="skill.icon"></span>
          </div>
=======
  <section id="skills">
    <div class="white">
      <h2>My skills:</h2>
      <div id="skill-group">
        <div class="skill" v-for="skill in skills" :key="skill.id">
          <p>{{ skill.title }}</p>
          <span v-html="skill.icon"></span>
        </div>
>>>>>>> a9cc423 (Changed styles for landing component)
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    skills() {
<<<<<<< HEAD
      return this.$store.getters.skills
    }
  }
}
=======
      return this.$store.getters.skills;
    },
  },
};
>>>>>>> a9cc423 (Changed styles for landing component)
</script>


<style scoped>
<<<<<<< HEAD

#skills {
  background: url('https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat;
=======
#skills {
  background: url("https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
    no-repeat;
>>>>>>> a9cc423 (Changed styles for landing component)
  background-size: cover;
  background-attachment: fixed;
  min-height: 900px;
  width: 100%;
  margin: 10px 0;
<<<<<<< HEAD


}

.white {
  background:rgba(255,255,255, 0.6);
=======
}

.white {
  padding: 10px 0;
  background: rgba(255, 255, 255, 0.6);
>>>>>>> a9cc423 (Changed styles for landing component)
  height: 100%;
}

h2 {
<<<<<<< HEAD
  color: #002D62;
=======
  color: #002d62;
>>>>>>> a9cc423 (Changed styles for landing component)
  font-weight: 800;
  font-size: 50px;
  text-align: left;
  padding-left: 20px;
  padding-top: 50px;
<<<<<<< HEAD
  margin: 0
=======
  margin: 0;
>>>>>>> a9cc423 (Changed styles for landing component)
}

#skill-group {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
<<<<<<< HEAD
    
}

.skill {
 display: flex;
 flex-direction: column;
 justify-content: center;
 color: #002D62;
 height: 200px;
 margin: 40px 20px 0 20px;
 width: 30%;
 padding-bottom: 5px;
=======
}

.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #002d62;
  height: 200px;
  margin: 40px 20px 0 20px;
  width: 30%;
  padding-bottom: 5px;
>>>>>>> a9cc423 (Changed styles for landing component)
}

.skill p {
  font-size: 30px;
  font-weight: 600;
}

.skill span {
  font-size: 100px;
  height: 100px;
<<<<<<< HEAD

}



=======
}

>>>>>>> a9cc423 (Changed styles for landing component)
@media (max-width: 1024px) {
  #skills {
    min-height: 1200px;
  }
}

@media (max-width: 425px) {
  #skills {
    min-height: 1000px;
    background-position-x: left;
  }
  h2 {
    padding-left: 20px;
    margin-bottom: 0;
  }
  .skill {
    width: 40%;
    height: 150px;
    margin: 10px 10px 0 10px;
  }
  .skill p {
    font-size: 22px;
  }
<<<<<<< HEAD
  
=======

>>>>>>> a9cc423 (Changed styles for landing component)
  .skill span {
    font-size: 50px;
  }
}

@media (max-width: 900px) and (max-height: 400px) {
  #skills {
    min-height: 400px;
  }
  .skill-group {
<<<<<<< HEAD
    margin-top: 30px
=======
    margin-top: 30px;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
  .skill {
    margin: 0;
  }
  .skill span {
    font-size: 70px;
  }
<<<<<<< HEAD

}  
=======
}
>>>>>>> a9cc423 (Changed styles for landing component)
</style>
