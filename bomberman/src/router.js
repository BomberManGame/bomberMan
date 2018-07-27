import Vue from 'vue'
import Router from 'vue-router'

import Homepage from './views/Homepage.vue'
import Loading from './views/Loading.vue'
import Game from './views/Game.vue'
import CreateRoom from './views/CreateRoom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/createRoom',
      name: 'createRoom',
      component: CreateRoom
    }
  ],
  mode: 'history'
})
