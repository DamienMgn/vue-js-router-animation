import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/skills',
      component: Skills
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
