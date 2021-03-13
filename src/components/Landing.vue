<template>
<<<<<<< HEAD
    <div class="landing">
    <div class="left">
    <h1>Web Developer</h1>

    <div class="text">
        <p>My name is Nebojša Lazarević I come from Belgrade, Serbia, I`m a Web Developer using JavaScript, HTML5 and CSS3 to create and design my projects.</p>
        <p>Using Vue.js as a framework, and Firebase Realtime Database I am able to build user interfaces and single-page applications.</p>
        <p>Udemy Academy student. Hard working and highly motivated, eager to test my skills, and learn new technologies. Excelent in problem-solving, passionate about software development. Excelent spoken and written English</p>
        <p>I`m a curious, self-driven individual and on the way to become best of the best, write clean and reusable code, have an eye for details and love to challenge myself.</p>
    </div>
    </div>

    <div class="right">
    <div id="row">
      <a class="cv-letter" :href="profile.cv">View CV</a>
      <a class="cv-letter" :href="profile.cv">View Cover Letter</a>
      <p id="git-p">Visit my GitHub page <a :href="profile.gitHub"><i id="git" class="fab fa-github"></i></a></p>
    </div>
    <i id="vue" class="fab fa-vuejs"></i>
    </div>
</div>
=======
  <div class="wrapper">
    <div class="landing">
      <div class="left">
        <h1>Web Developer</h1>

        <div class="text">
          <p>
            My name is Nebojša Lazarević I come from Belgrade, Serbia, I`m a Web
            Developer using JavaScript, HTML5 and CSS3 to create and design my
            projects.
          </p>
          <p>
            Using Vue.js as a framework, and Firebase Realtime Database I am
            able to build user interfaces and single-page applications.
          </p>
          <p>
            Udemy Academy student. Hard working and highly motivated, eager to
            test my skills, and learn new technologies. Excelent in
            problem-solving, passionate about software development. Excelent
            spoken and written English
          </p>
          <p>
            I`m a curious, self-driven individual and on the way to become best
            of the best, write clean and reusable code, have an eye for details
            and love to challenge myself.
          </p>
        </div>
      </div>

      <div class="right">
        <div id="row">
          <a class="cv-letter" :href="profile.cv">View CV</a>
          <a class="cv-letter" :href="profile.cv">View Cover Letter</a>
          <a :href="profile.gitHub" id="git-link">
            Visit my GitHub page
            <i id="git" class="fab fa-github"></i>
          </a>
        </div>
        <i id="vue" class="fab fa-vuejs"></i>
      </div>
    </div>
  </div>
>>>>>>> a9cc423 (Changed styles for landing component)
</template>

<script>
export default {
  computed: {
    profile() {
<<<<<<< HEAD
      return this.$store.getters.profile
    }
  }
}
</script>

<style scoped>
=======
      return this.$store.getters.profile;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #002d62;
  margin-bottom: 10px;
}
>>>>>>> a9cc423 (Changed styles for landing component)

.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
<<<<<<< HEAD
  min-height: 100vh;
=======
>>>>>>> a9cc423 (Changed styles for landing component)
}
.left {
  width: 60%;
  height: 100%;
  text-align: left;
<<<<<<< HEAD
  margin-top: 150px;
=======
  margin-top: 100px;
>>>>>>> a9cc423 (Changed styles for landing component)
  animation: fall-in 0.5s 1s ease forwards;
  opacity: 0;
}

h1 {
  width: 90%;
<<<<<<< HEAD
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 140px;
  font-weight: 900; 
  line-height: 1em;
  color: #002D62;
=======
  margin-top: 0px;
  margin-bottom: 40px;
  font-size: 140px;
  font-weight: 900;
  line-height: 1em;
  color: white;
>>>>>>> a9cc423 (Changed styles for landing component)
}

.text {
  padding: 0 5px;
}

p {
  width: 90%;
  font-size: 26px;
  font-weight: 600;
<<<<<<< HEAD
  color: #002D62;
}


@keyframes fall-in {
  100% {
    margin-top: 50px;
    opacity: 1
=======
  color: white;
}

@keyframes fall-in {
  100% {
    margin-top: 50px;
    opacity: 1;
>>>>>>> a9cc423 (Changed styles for landing component)
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

<<<<<<< HEAD
.cv-letter {
  background: #002D62;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #002D62;
  margin: 10px;
  padding: 10px 20px;
  transition: all 0.3s ease
=======
a {
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 10px 20px;
}

.cv-letter {
  background: transparent;
  color: white;
  text-align: center;
  border-radius: 5px;
  margin: 10px;
>>>>>>> a9cc423 (Changed styles for landing component)
}

.cv-letter:hover {
  background: white;
<<<<<<< HEAD
  color: #002D62;
}

#git-p {
  display: flex;
  align-items: center;
  justify-content: center;
=======
  color: #002d62;
}

#git-link {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
#git-link:hover {
  background: white;
  color: #002d62;
>>>>>>> a9cc423 (Changed styles for landing component)
}

#git {
  padding: 0 0 0 10px;
  font-size: 60px;
<<<<<<< HEAD
  color: #002D62;
}

#vue {
  color: #002D62;
=======
  color: white;
  transition: color 0.3s ease;
}

#git-link:hover #git {
  color: #002d62;
}

#vue {
  color: white;
>>>>>>> a9cc423 (Changed styles for landing component)
  font-size: 400px;
  padding: 50px;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 22px;
  }
  #vue {
    font-size: 350px;
  }
}

@media (max-width: 768px) {
  #landing {
<<<<<<< HEAD
    height: 800px
=======
    height: 800px;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
  .left {
    padding-left: 0;
    width: 50%;
  }
  .right {
    padding-bottom: 0px;
<<<<<<< HEAD
    width: 50%
=======
    width: 50%;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
  h1 {
    font-size: 65px;
    width: 86%;
<<<<<<< HEAD
    margin-bottom: 70px
  }
  p {
  
=======
    margin-bottom: 70px;
  }
  p {
>>>>>>> a9cc423 (Changed styles for landing component)
    width: 100%;
  }
  #vue {
    font-size: 300px;
<<<<<<< HEAD
    padding-bottom: 150px
=======
    padding-bottom: 150px;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
}

@media (max-width: 425px) {
  #home {
    width: 100%;
  }
  .landing {
    flex-direction: column;
    width: 100%;
    height: 950px;
  }
  .left {
    padding: 0 5px;
    width: 100%;
<<<<<<< HEAD
    margin-top: 40px
=======
    margin-top: 40px;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
  .right {
    margin-top: 25px;
    padding-bottom: 30px;
<<<<<<< HEAD
    width: 100%
  }
  .cv-letter  {
    font-size: 22px;
    margin-bottom: 10px
=======
    width: 100%;
  }
  .cv-letter {
    font-size: 22px;
    margin-bottom: 10px;
>>>>>>> a9cc423 (Changed styles for landing component)
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
<<<<<<< HEAD
    margin-left: 20px
=======
    margin-left: 20px;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
  p {
    font-size: 20px;
    width: 100%;
<<<<<<< HEAD
    text-align: center
=======
    text-align: center;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
}

@media (max-width: 320px) {
  p {
    font-size: 18px;
  }
}

<<<<<<< HEAD

@media (max-width: 900px) and (max-height: 400px) {
  .landing {
    flex-direction: column
=======
@media (max-width: 900px) and (max-height: 400px) {
  .landing {
    flex-direction: column;
>>>>>>> a9cc423 (Changed styles for landing component)
  }
  .left {
    width: 100%;
  }
  h1 {
    font-size: 80px;
  }
  #vue {
    display: none;
  }
}
<<<<<<< HEAD

=======
>>>>>>> a9cc423 (Changed styles for landing component)
</style>