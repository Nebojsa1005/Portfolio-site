<template>
    <section id="projects">
            <h2>My Projects: </h2>
            <div class="projects">
                <div class="project-info" v-for="pro in projects" :key="pro.id">
                    <div class="project-title">
                        <h3>{{ pro.name }}</h3>
                    </div>
                    <div class="project-body">  
                        <!-- <img class="image" :src="require(`../pictures/projects/${pro.image}`)"> -->
                        <img class="image" :src="pro.image" alt="">
                    
                        <div class="hidden-content">
                            <p class="text">{{ pro.text }}</p>
                            <div class="link-container">
                                <a class="link" :href="pro.link">See the site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: this.$store.getters.projects, 
        }
    }
}
</script>

<style scoped>      

#projects {
    width: 100%;
    margin: 10px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('https://www.departement13.fr/uploads/tx_cg13profils/Appels-projets.jpg');
}

h2 {
    color: white;
    font-weight: 800;
    font-size: 50px;
    align-self: flex-start;
    padding-left: 20px;
    margin: 50px 0 0 0;
    text-shadow: 3px 3px 6px black
}

.projects {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
}


.project-info {
   margin-bottom: 20px;
   width: 48%;
   text-shadow: 5px 3px 5px black;
}

.project-title {
    width: 100%;
    padding-left: 20px;
    display: flex;
    text-align: left;
}

.project-title h3{
    font-size: 35px;
    color: white;
}

.project-body {
    display: flex;
    justify-content: center;
    background: #002D62;
    position: relative;
    transition: all 300ms ease 100ms;
}

.project-body:hover .text,
.project-body:active .text {
    opacity: 1;
    transform: translateY(0);
}

.project-body:hover .link-container,
.project-body:active .link-container {
    opacity: 1;
    transform: translateY(0);    
}

 

.project-body:hover .image ,
.project-body:active .image {
    opacity: 0.2;
}

.hidden-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: flex-end;
}

.image {
    transition: opacity 0.6s;
    width: 100%;
    opacity: 1;  
}

.text {
    transition: all 300ms ease 100ms;
    opacity: 0;
    margin-top: 20px;
    padding: 0 15px 15px 0;
    transform: translateY(-30px);
    text-align: right;  
    color: white;
    font-size: 20px;
    width: 80%;
    border-bottom: 7px solid white;
}

.link-container {
    transition: all 300ms ease 200ms;
    opacity: 0;
    transform: translateY(50px);
    width: 60%;
    padding: 15px 15px 0 0;
    margin-bottom: 20px;
    text-align: right;
    border-top: 7px solid white;
}

.link {
    color: white;
    padding: 7px 10px 0 0;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
}



@media (max-width: 1024px) {
    .text {
        font-size: 17px;
    }
    .link { 
        width: 140px;
        
    }
}

@media (max-width: 768px) {
    .project-info {
        width: 100%;
        margin-bottom: 30px;
    }
    .text {
        font-size: 30px;
    }
    .link {
        font-size: 25px;
    }
} 
@media (max-width: 425px) {
    .project-title h3{
        font-size: 22px;
        margin-top: 0;
        color: white;
    }
   .hidden-content {
        top: 10px;
        right: 10px;
    }
    .text {
        margin-top: 15px;
        font-size: 16px;
        border-bottom: 5px solid white;
    } 
    .link-container {
        border-top: 5px solid white;
    }
    .image {
        height: 60%
    }
    .link {
        width: 100px;
        font-size: 16px;
        margin-bottom: 15px;
    }
}

@media (max-width: 900px) and (max-height: 425px) {
   .project-info {
       width: 100%;
   }
    .text {
        margin-top: 15px;
    } 
  .link {
        width: 100px;
        padding: 10px;
        margin-bottom: 15px;
    }
}
</style>