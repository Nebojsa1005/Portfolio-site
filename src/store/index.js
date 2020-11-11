import { createStore } from 'vuex'

export default createStore({
  state: {
    profile: {
      email: 'lazarevic.nebojsa1005@gmail.com',
      fb: 'https://www.facebook.com/nebojsa.lazarevic.12/',
      linkedin: 'https://www.linkedin.com/in/nebojsa-lazarevic-8934b81b7/'
    },
    skills: [
      {id: 1, title: 'JavaScript', icon: '<i class="fab fa-js-square"></i>'},
      {id: 2, title: 'HTML5', icon: '<i class="fab fa-html5"></i>'},
      {id: 3, title: 'CSS3', icon: '<i class="fab fa-css3-alt"></i>'},
      {id: 4, title: 'Vue.JS', icon: '<i class="fab fa-vuejs"></i>'},
      {id: 5, title: 'Firebase', icon: '<i class="fas fa-server"></i>'},
      {id: 6, title: 'Responsive Design', icon: '<i class="fas fa-ruler-combined"></i>'},
      {id: 7, title: 'Bootstrap', icon: '<i class="fab fa-bootstrap"></i>'},
      {id: 8, title: 'Git', icon: '<i class="fab fa-github"></i>'}
    ],
    projects: [
      { 
        id: 1, 
        name: 'Coach Finder', 
        image: 'https://i.postimg.cc/MZPg4YXH/pro-1.jpg', 
        link: 'https://find-a-coach.netlify.app',
        text: 'Find a coach using filters to access skills of the coaches, or register a new one'
      },
      { id: 2, 
        name: 'Monster-slayer', 
        image: 'https://i.postimg.cc/658FNGG0/pro-2.jpg', 
        link: 'https://monster-salyer-game.netlify.app',
        text: 'Slay the monster using attacks'
      },
      { id: 3, 
        name: 'Mountain Travel', 
        image: 'https://i.postimg.cc/nh75Xb29/pro-3.jpg', 
        link: 'https://mountin-app.netlify.app',
        text: 'Mountain travel agency'
      },
     
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    skills( state ) {
      return state.skills
    },
    projects(state) {
      return state.projects
    },
    profile( state ) {
      return state.profile
    }
  }
})
