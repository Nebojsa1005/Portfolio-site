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
                            <a class="link" :href="pro.link">See the site</a>
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
    margin: 50px 0;
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
    width: 60%;
    padding-left: 20px;
    display: flex;
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
}

.project-body:hover .hidden-content {
    transform: scale(1);
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 100ms;
}

.project-body:hover .image {
    transition: opacity 0.6s;
    opacity: 0.2;
}

.hidden-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: flex-end;
    align-items: center;
    transform: scale(0);
    transition: transform 300ms ease 100ms;
    height: 100%;
}

.image {
    width: 100%;
    opacity: 1;  
}

.text {
    color: white;
    margin-bottom: 150px;
    font-size: 20px;
}

.link {
    color: white;
    padding: 15px;
    font-size: 20px;
    border: 2px solid white;
    border-radius: 30px;
    box-shadow: 0px 0px 6px 5px white;
    width: 170px;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 30px;
}


@media (max-width: 1024px) {
    .projects {
        height: 850px;
    }
    .text {
        margin-bottom: 60px;
        font-size: 18px;
    }
    .link { 
        padding: 15px;
        width: 140px;
        
    }
}

@media (max-width: 768px) {
    .projects {
        height: 2300px
    }
    .project-info {
        width: 100%;
        margin-bottom: 50px;
    }
    .text {
        font-size: 30px;
        margin-bottom: 150px;
    }
    .link {
        padding: 15px;
        font-size: 25px;
    }
} 
@media (max-width: 440px) {
    #projects {
        height: 1200px;
    }
   .project-title h3{
    font-size: 25px;
    color: white;
    }
    .text {
        margin-bottom: 40px;
        font-size: 18px
    } 
    .image {
        height: 60%
    }
    .link {
        width: 100px;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 15px;
    }
}

@media (max-width: 320px) {
    #projects {
        height: 1270px;
    }
}
</style>