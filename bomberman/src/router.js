import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pending from './views/Pending.vue'
import Game from './views/Game.vue'
import CreateRoom from './views/CreateRoom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    },
    {
      path : '/createRoom',
      name : 'createRoom',
      component: CreateRoom
    }
  ]
})
