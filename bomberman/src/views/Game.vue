<template>
<div class="bombers">
<button v-on:click="play" type="button" class="btn btn-info">PLAY </button> |
<button v-on:click="exit" type="button" class="btn btn-warning">EXIT </button>
  <div class="row">
    <div class="col-sm-3">
      <h1> TERORIS </h1>
      <img v-on:click="upSize" alt="sss" width="200px" src="/img/bluebutton.gif"/>
    </div>

    <div  class="col-sm-6" >
      <img v-if="isPlay" src="/img/bomb.gif" alt="bomb" v-bind:height="boomSize" v-bind:width="boomSize">
      <h2 v-if="isExplode"> TERORIS WIN </h2>
      <img v-if="isExplode" src="/img/explode.gif" alt="bomb" height="100%" width="100%">
      <h2 v-if="isWinner"> Police WIN </h2>
      <img v-if="isWinner" src="/img/winner.gif" alt="bomb" height="100%" width="100%">
    </div>

    <div class="col-sm-3">
      <h1> POLICE  </h1>
      <img v-on:click="downSize" width="200px" src="/img/redbutton.gif"/>
    </div>
  </div>
</div>
</template>

<script>
import db from '@/firebase/firebase.js'

export default {
  data () {
    return {
      boomSize: 0,
      police : '',
      teror : '',
      roomId :'',
      isPlay: false,
      isExplode : false,
      isWinner : false,
    }
  },
  mounted () {
      //db ref nya ke 'bomber/room? dari localstorage
    let room = localStorage.getItem("room")
    console.log("iiniiiiiii roooomm-------",room)
    if(room === null){
      alert('Please select room to play the game!')
      this.$router.replace('/')
    } else {
        var getBoomSize = db.ref('bomber/'+ `room${room}`)
        console.log(getBoomSize)
        getBoomSize.on('value',(snapshot)=> {
            this.getBomb(snapshot.val());
            // this.play()
        })
    }
  },
  methods:{
    getBomb (val) {
      console.log("======boom======", val.boom)
      console.log("=======room=====", val.roomId)
      console.log("===police====", val.police)
      console.log("===teror===", val.teror)
      this.boomSize = val.boom
      this.explode(val.boom)
      this.roomId = val.roomId
      console.log("============", val.teror)
      this.explode(val.boom)
    },
    upSize () {
      console.log("upsize", this.boomSize + 5)
      console.log(postData, this.roomId, this.boomSize, upgradeBoom)
      let room = localStorage.getItem("room")
      let upgradeBoom = this.boomSize + 5
      var postData = {
          roomId : room,
          police : this.police,
          teror: this.teror,
          boom : upgradeBoom
      }
      
      var updates = {};
      //harusnya '/boomber/room? dari localstorage
      updates['/bomber'+`/room${room}`] = postData;
      return db.ref().update(updates);
    },
    downSize () {
      console.log("downsize", this.boomSize - 5)
      console.log(postData, this.roomId, this.boomSize, upgradeBoom)
      let room = localStorage.getItem("room")
      let upgradeBoom = this.boomSize - 5
      var postData = {
          roomId : room,
          police : this.police,
          teror: this.teror,
          boom : upgradeBoom
      }
      
      var updates = {};
      updates['/bomber'+`/room${room}`] = postData;
      return db.ref().update(updates);
    },
    play () {
      let room = localStorage.getItem('room')
      if(room){
        this.isPlay = true
        this.isExplode = false
        this.isWinner = false

        var postData = {
          roomId : room,
          police : this.police,
          teror: this.teror,
          boom : 500
        }

        var updates = {};
        updates['/bomber'+`/room${room}`] = postData
        return db.ref().update(updates)
      }else{
          this.isPlay = false
      }
    },
    exit () {
      console.log("harusnya exit")
      localStorage.clear()
      this.$router.replace('/')
      this.isPlay = false
    },
    explode(num) {
      console.log("explodeee", num)
      console.log("this play", this.isPlay)
      if (num >= 1005) {
        this.isExplode = true
        this.isWinner = false
        this.isPlay = false
      } else if (num < 1000 && num > 0) {
        this.isExplode = false
      } else if (num <= 0) {
        this.isWinner = true
        this.isExplode = false
        this.isPlay = false
      }
    }
  }
}
</script>
