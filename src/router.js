import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'portfolio', path: '/portfolio', component: Portfolio},
    { name: 'about', path: '/about', component: About},
    { name: 'contact', path: '/contact', component: Contact}
  ]
})
