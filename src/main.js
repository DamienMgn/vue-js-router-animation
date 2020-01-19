import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTypedJs from 'vue-typed-js'

Vue.use(BootstrapVue)

Vue.use(VueRouter)

Vue.use(VueTypedJs)

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
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
  ],
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
