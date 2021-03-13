<template>
<<<<<<< HEAD
    <header id="nav">
        <div class="container">
            <router-link tag="a" to="/">Home</router-link> 
            <router-link tag="a" to="/about">Contact me</router-link>
        </div>
=======
  <header id="nav">
    <div class="container">
      <router-link tag="a" to="/">Home</router-link>
      <router-link tag="a" to="/about">Contact me</router-link>
    </div>
>>>>>>> a9cc423 (Changed styles for landing component)
  </header>
</template>

<style scoped>
#nav {
  height: 50px;
<<<<<<< HEAD

  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 150px 10px 20px;  
  opacity: 0;
  animation: 1s nav-item 1.3s ease forwards;
 }
=======
  background: #002d62;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 150px 10px 20px;
  opacity: 0;
  animation: 1s nav-item 1.3s ease forwards;
}
>>>>>>> a9cc423 (Changed styles for landing component)

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
<<<<<<< HEAD
  height: 100%
=======
  height: 100%;
>>>>>>> a9cc423 (Changed styles for landing component)
}

#nav a {
  font-weight: bold;
  font-size: 25px;
<<<<<<< HEAD
  color: #002D62;
=======
  color: white;
>>>>>>> a9cc423 (Changed styles for landing component)
  text-decoration: none;
  transition: transform 0.3s ease;
}

<<<<<<< HEAD
#nav a.router-link-exact-active {
  color: #002D62;
=======
#nav a:hover {
  transform: scale(1.4);
}

#nav a.router-link-exact-active {
>>>>>>> a9cc423 (Changed styles for landing component)
  transition: transform 0.3s ease;
  transform: scale(1.8);
}

<<<<<<< HEAD

.slide-enter-active {
    animation: slide-in 0.2s forwards ease-in
}
.slide-leave-active {
    animation: slide-in 0.3s forwards ease-in 
}

@keyframes slide-in {
    from {
        transform: translateX(-30px);
        opacity: 0
    }
    to {
        transform: translateX(0px);
        opacity: 1
    }
}


@media (max-width: 440px) {
    #nav a.router-link-exact-active {
    transform: scale(1.2)
=======
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
>>>>>>> a9cc423 (Changed styles for landing component)
  }
}

@media (max-width: 320px) {
  #nav {
    justify-content: flex-start;
    padding-left: 20px;
  }
  .container {
    width: 60%;
<<<<<<< HEAD
    text-align: left

  }
  #nav a {
    font-size: 18px
  }
  #nav a.router-link-exact-active {
    transform: scale(1.4)
  }
}

=======
    text-align: left;
  }
  #nav a {
    font-size: 18px;
  }
  #nav a.router-link-exact-active {
    transform: scale(1.4);
  }
}
>>>>>>> a9cc423 (Changed styles for landing component)
</style>