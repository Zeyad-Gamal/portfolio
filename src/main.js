import './assets/main.css'
import './assets/css/bootstrap/bootstrapmin.css'
import './assets/css/bootstrap/font/bootstrap-icons.css'
import './assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faAngleRight,
  faUser,
  faHouse,
  faLayerGroup,
  faServer,
  faCloud,
  faChartLine,
  faDatabase,
  faGears,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons'

import { MotionPlugin } from '@vueuse/motion'


import { faMap } from '@fortawesome/free-regular-svg-icons'



// Add only required icons
library.add(
  faGithub,
  faLinkedin,
  faWhatsapp,
  faEnvelope,
  faPhone,
  faLocationDot,
  faMap,
  faAngleRight,
  faUser,
  faHouse,
  faLayerGroup,
  faServer,
  faCloud,
  faChartLine,
  faDatabase,
  faGears,
  faCircleInfo,


)

createApp(App)
  .use(router)
  .use(createPinia())
  .use(MotionPlugin)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
