<template>
  <section id="contact">
    <h1>Get in touch</h1>
    <p>
      If you wanna get in touch, talk to me about a project, collaboration or
      just say hi, send an email to
      <a id="email" href="mailto:lazarevic.nebojsa1005@gmail.com"
        >lazarevic.nebojsa1005@gmail.com</a
      >
      and let's talk.
    </p>
    <hr />
    <p>Or send me a message on</p>
    <p>
      <a :href="profile.linkedin"><img src="../pictures/logos/logo.png" /></a>
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
};
</script>

<style scoped>
#contact {
  width: 80%;
  min-height: calc(100vh - 200px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 140px;
}

h1 {
  margin: 100px 0 20px 0;
  align-self: flex-start;
  font-size: 40px;
  font-weight: 700;
  color: #00356b;
}

p {
  color: #00356b;
  font-size: 24px;
  text-align: left;
  width: 70%;
}

#email {
  border-radius: 10px;
  font-weight: 800;
}

#email:hover {
  animation: 0.3s email ease forwards;
}

@keyframes email {
  100% {
    color: #00356b;
  }
}

p a {
  color: #3e8ede;
  text-decoration: none;
}

hr {
  width: 90%;
  background: white;
  margin: 20px 0;
}

a img {
  height: 40px;
}

@media (max-width: 1024px) {
  #contact {
    height: 81vh;
    width: 90%;
    padding-left: 50px;
  }
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 35px;
  }
  a img {
    height: 60px;
  }
}

@media (max-width: 768px) {
  #contact {
    width: 80%;
    padding-left: 100px;
  }
  p {
    font-size: 25px;
  }
  a img {
    height: 50px;
  }
}

@media (max-width: 440px) {
  #contact {
    width: 100%;
    padding-left: 0;
  }
  h1 {
    padding-left: 10px;
    margin-top: 50px;
  }
  p {
    padding-left: 10px;
    font-size: 18px;
    margin: 10px 0;
  }
  hr {
    margin: 10px 0;
  }
  a img {
    height: 30px;
  }
}

@media (max-width: 320px) {
  #contact {
    width: 90%;
  }
  a img {
    height: 25px;
  }
}

@media (max-width: 900px) and (max-height: 400px) {
  #contact {
    min-height: 450px;
    padding-left: 50px;
    width: 90%;
  }
  h1 {
    margin-top: 30px;
  }
  p {
    font-size: 17px;
  }
}
</style>