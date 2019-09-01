import Vue from 'vue'
import Router from 'vue-router'
import Cards from '../components/Cards.vue'
import Navbar from "../components/Navbar.vue";
import SingleAnimal from "../components/SingleAnimal.vue";
import Dogs from '../components/Dogs.vue'
import Cats from '../components/Cats.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Navbar,
      children: [
        {
          path: '',
          name: 'Cards',
          component: Cards,
        },
        {
          path: '/animal/:petId',
          name: 'SingleAnimal',
          component: SingleAnimal,
        },
        {
          path: '/dogs',
          name: 'Dogs',
          component: Dogs,
        },
        {
          path: '/cats',
          name: 'Cats',
          component: Cats,
        },
      ]
      
    }
  ]
})