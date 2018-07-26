import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Loading from './views/Loading.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    }
  ]
})
