import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import Pending from './views/Pending.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/pending',
      name: 'pending',
      component: Pending
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
