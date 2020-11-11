<template>
    <footer>
        <div id="left">
            <p id="footer-p">&copy; <span id="copyright">{{ year }} </span> Nebojša Lazarević</p>
            <a class="media-link" :href="profile.linkedin"><i class="fab fa-linkedin"></i></a>
            <a class="media-link" :href="profile.fb"><i class="fab fa-facebook-square"></i></a>
        </div>
        <div id="middle">
            <a class="a-to-section" href="/#home">Home</a>
            <a class="a-to-section" href="/#skills">Skills</a>
            <a class="a-to-section" href="/#projects">Projects</a>
        </div>
        <router-link id="footer-contact" to="/about">Get in touch</router-link>
  </footer>
</template>

<script>
export default {
    data() {
    return {
      profile: this.$store.getters.profile
    }
  }, 
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  background: #002D62;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
 
}

footer a {
  align-self: center;
  color: white;
  font-size: 24px;
  text-decoration: none;
  line-height: 50px;
  transition: 0.3s ease;
  width: 40px;
}

footer p {
  color: white;
  font-size: 20px;
}

#left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
}

.media-link {
  font-size: 30px;
  transform: scaleX(1);
  transition: 0.23s ease;
}

.media-link:hover,
.media-link:active {
  transform: scaleX(1.5);
  transition: 0.2 ease;
}

#middle {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.a-to-section:hover,
.a-to-section:active {
  transform: scale(1.3) rotate(-15deg);
  transition: 0.3 ease
}

#footer-contact {
  justify-self: center;
  width: 30%;
  transition: 0.3s ease
}

#footer-contact:hover,
#footer-contact:active {
  transform: translateY(-10px) scale(1.2);
  transition: 0.3s ease
}


@media (max-width: 440px) {
  footer {
    padding: 20px 10px;
    height: 150px;
  }
  #left {
    align-items: flex-start;
  }
  #footer-p {
    margin: 0;
    font-size: 15px
  }
  #middle {
    justify-content: flex-start;
  }
  .a-to-section{
    font-size: 20px;
  }
  #footer-contact {
    line-height: 20px;
  }
}




</style>