<template>
    <div class="landing">
    <div class="left">
    <h1>Frontend developer</h1>

    <div class="text">
        <p>My name is Nebojša Lazarević I come from Belgrade, Serbia, I`m a frontend developer using JavaScript, HTML5 and CSS3 to create and design my layouts.</p>
        <p>Using Vue.js as a framework, and Firebase Realtime Database I am able to build user interfaces and single-page applications.</p>
        <p>Udemy Academy student. Hard working and highly motivated, eager to test my skills, and learn new technologies.</p>
        <p>I`m  a talented, curious, self-driven individual and on the way to become best of the best, write clean and reusable code, have an eye for details and love to challenge myself.</p>
    </div>
    </div>

    <div class="right">
    <div id="row">
      <a id="cv-btn" :href="profile.cv">View CV</a>
      <p id="git-p">Visit my GitHub page <a :href="profile.gitHub"><i id="git" class="fab fa-github"></i></a></p>
    </div>
    <i id="vue" class="fab fa-vuejs"></i>
    </div>
</div>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.getters.profile
    }
  }
}
</script>

<style scoped>

.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
}
.left {

  width: 60%;
  height: 100%;
  text-align: left;
  margin-top: 150px;
  animation: fall-in 0.5s 1s ease forwards;
  opacity: 0;
}

h1 {
  width: 90%;
  margin-top: 20px;
  font-size: 120px;
  font-weight: 900; 
  line-height: 1em;
  color: #002D62;
}

p {
  width: 90%;
  font-size: 28px;
  font-weight: 600;
  color: #002D62;
}


@keyframes fall-in {
  100% {
    margin-top: 50px;
    opacity: 1
  }
}

.right {
  flex-basis: 40%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-left: 200px;
  opacity: 0;
  animation: slide-left 0.5s 0.5s ease-in forwards;
}

@keyframes slide-left {
  100% {
    padding-left: 0px;
    opacity: 1;
  }
}

#row {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#cv-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background: #002D62;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  border-radius: 5px;
  margin: 10px;
}

#git-p {
  display: flex;
  align-items: center;
  justify-content: center;
}

#git {
  padding: 0 0 0 10px;
  font-size: 60px;
  color: #002D62;
}

#vue {
  color: #002D62;
  font-size: 400px;
  padding: 50px;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 25px;
  }
  #vue {
    font-size: 350px;
  }
}

@media (max-width: 768px) {
  #landing {
    height: 800px
  }
  .left {
    padding-left: 0;
    width: 50%;
  }
  .right {
    padding-bottom: 0px;
    width: 50%
  }
  h1 {
    font-size: 65px;
    width: 86%;
    margin-bottom: 70px
  }
  p {
  
    width: 100%;
  }
  #vue {
    font-size: 300px;
    padding-bottom: 150px
  }
}

@media (max-width: 420px) {
  #home {
    width: 100%;
  }
  .landing {
    flex-direction: column;
    width: 100%;
    height: 800px;
  }
  .left {
    padding: 0 5px;
    width: 100%;
    margin-top: 40px
  }
  .right {
    margin-top: 25px;
    padding-bottom: 30px;
    width: 100%
  }
  #cv-btn  {
      font-size: 20px;
      width: 150px;
      height: 40px;
      margin-bottom: 10px
  }
  #git {
    font-size: 50px;
  }
  #vue {
    display: none;
  }
  h1 {
    font-size: 60px;
    width: 84%;
    margin-bottom: 40px;
    margin-left: 20px
  }
  p {
    font-size: 20px;
    width: 100%;
    text-align: center
  }
}

@media (max-width: 320px) {
  p {
    font-size: 18px;
  }
}
</style>