import { createStore } from 'vuex'

export default createStore({
  state: {
    profile: {
      email: 'lazarevic.nebojsa1005@gmail.com',
      cv: 'https://drive.google.com/file/d/1s3CBGb8OMTEALLPX9_vd60CStovvjRIr/view?usp=sharing',
      letter: 'https://drive.google.com/file/d/1sxRV_AUCV9IVpZRL6ZZndM5x9gYPMHvP/view?usp=sharing',
      fb: 'https://www.facebook.com/nebojsa.lazarevic.12/',
      linkedin: 'https://www.linkedin.com/in/nebojsa-lazarevic-8934b81b7/',
      gitHub: 'https://github.com/Nebojsa1005'
    },
    skills: [
      {id: 1, title: 'JavaScript', icon: '<i class="fab fa-js-square"></i>'},
      {id: 2, title: 'HTML5', icon: '<i class="fab fa-html5"></i>'},
      {id: 3, title: 'CSS3', icon: '<i class="fab fa-css3-alt"></i>'},
      {id: 4, title: 'Vue.JS', icon: '<i class="fab fa-vuejs"></i>'},
      {id: 5, title: 'Firebase', icon: '<i class="fas fa-server"></i>'},
      {id: 6, title: 'Responsive Design', icon: '<i class="fas fa-ruler-combined"></i>'},
      {id: 7, title: 'Bootstrap', icon: '<i class="fab fa-bootstrap"></i>'},
      {id: 8, title: 'Git/GitHub', icon: '<i class="fab fa-github"></i>'},
      {id: 9, title: 'SASS', icon: '<i class="fab fa-sass"></i>'},
      {id: 10, title: 'MongoDB', icon: '<i class="fas fa-server"></i>'},
      {id: 11, title: 'Express', icon: '<i class="fab fa-etsy"></i>'},
      {id: 12, title: 'NodeJS', icon: '<i class="fab fa-node"></i>'}
 
    ],
    projects: [
      { 
        id: 1, 
        name: 'Coach Finder', 
        image: 'https://i.postimg.cc/MZPg4YXH/pro-1.jpg', 
        link: 'https://find-a-coach.netlify.app',
        text: 'Find a coach using filters, or register a new one'
      },
      {
        id: 2,
        name: 'Weather App',
        image: 'https://i.postimg.cc/R09HKdHQ/Weather-app.jpg',
        link: 'https://weather-app1005.netlify.app/',
        text: 'Search for a weather forecast for any city'
      },
      { id: 3, 
        name: 'Mountain Travel', 
        image: 'https://i.postimg.cc/nh75Xb29/pro-3.jpg', 
        link: 'https://mountin-app.netlify.app',
        text: 'Mountain travel agency'
      },
      { id: 4, 
        name: 'Ethereum Transactions Crawler', 
        image: 'https://i.postimg.cc/v8nTvf9V/ethereum.jpg', 
        link: 'https://ethereum-transactions-crawler-1005.netlify.app/',
        text: 'Enter an address and view transactions'
      },
      {
        id: 5,
        name: 'Meetups',
        image: 'https://i.postimg.cc/nzk7Jftq/meetups.jpg',
        link: 'https://devmeetups.netlify.app',
        text: 'Create an account, organize or register'
      },
      {
        id: 6,
        name: 'SpaecX',
        image: 'https://i.postimg.cc/XXMn1XDL/spacex.jpg',
        link: 'https://spacex1005.netlify.app',
        text : 'See the details of space launches'
      },
      {
        id: 7,
        name: 'Tab-Tracker',
        link: 'https://tab-tracker1005.netlify.app',
        image: 'https://i.postimg.cc/J4vMzLmk/tab-tracker.jpg',
        text: 'See the details of a song, or add your favorite song'
      }
     
    ]
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
    },
    
  }
})
