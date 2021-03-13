<template>
  <header id="nav">
    <div class="container">
      <router-link tag="a" to="/">Home</router-link>
      <router-link tag="a" to="/about">Contact me</router-link>
    </div>
  </header>
</template>

<style scoped>
#nav {
  height: 50px;
  background: #002d62;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 150px 10px 20px;
  opacity: 0;
  animation: 1s nav-item 1.3s ease forwards;
}

@keyframes nav-item {
  100% {
    padding-right: 0;
    opacity: 1;
  }
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 100%;
}

#nav a {
  font-weight: bold;
  font-size: 25px;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease;
}

#nav a:hover {
  transform: scale(1.4);
}

#nav a.router-link-exact-active {
  transition: transform 0.3s ease;
  transform: scale(1.8);
}

.slide-enter-active {
  animation: slide-in 0.2s forwards ease-in;
}
.slide-leave-active {
  animation: slide-in 0.3s forwards ease-in;
}

@keyframes slide-in {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@media (max-width: 440px) {
  #nav a.router-link-exact-active {
    transform: scale(1.2);
  }
}

@media (max-width: 320px) {
  #nav {
    justify-content: flex-start;
    padding-left: 20px;
  }
  .container {
    width: 60%;
    text-align: left;
  }
  #nav a {
    font-size: 18px;
  }
  #nav a.router-link-exact-active {
    transform: scale(1.4);
  }
}
</style>