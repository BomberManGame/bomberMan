<template>
  <div class="container text-center">
    <h1>BOMBERMAN</h1><br>
    <div v-if="seen">
      <form>
        <h2>And please input your name here:</h2>
        <input type="text" class="name" v-model="name" placeholder="Input your name...">
        <button class="btnInputName" @click="submitPlayer">Submit</button>
      </form>
    </div>
    <div v-else>
      <form>
        <h2>Please Select Room & Select Your Character</h2>
        <h2>by Clicking the Icon Below</h2>
      </form>
    </div>
    <br>
    <br>
    <center>
      <div class="row">
        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos1">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room1</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer1">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos2">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room2</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer2">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos3">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room3</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer3">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos4">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room4</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer4">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  props: [],
  data () {
    return {
      name: '',
      position: '',
      playersRoom1: [],
      playersRoom2: [],
      playersRoom3: [],
      playersRoom4: [],
      seen: false,
      room: ''
    }
  },
  methods: {
    submitPlayer () {
      if (this.position.slice(-1) === '1') {
        this.playersRoom1.push({name: this.name, position: this.position})
        console.log('posisi room 1 coba teroris-------', this.playersRoom1)
        this.name = ''
        this.seen = false
        if (this.playersRoom1.length === 2) {
          console.log('yuk main room 1', this.playersRoom1)
          this.playersRoom1 = []
          this.seen = false
        }
      }
      if (this.position.slice(-1) === '2') {
        this.playersRoom2.push({name: this.name, position: this.position})
        this.name = ''
        this.seen = false
        if (this.playersRoom2.length === 2) {
          console.log('yuk main room 2', this.playersRoom2)
          this.playersRoom2 = []
          this.seen = false
        }
      }
      if (this.position.slice(-1) === '3') {
        this.playersRoom3.push({name: this.name, position: this.position})
        this.name = ''
        this.seen = false
        if (this.playersRoom3.length === 2) {
          console.log('yuk main room 3', this.playersRoom3)
          this.playersRoom3 = []
          this.seen = false
        }
      }
      if (this.position.slice(-1) === '4') {
        this.playersRoom4.push({name: this.name, position: this.position})
        this.name = ''
        this.seen = false
        if (this.playersRoom4.length === 2) {
          console.log('yuk main room 4', this.playersRoom4)
          this.playersRoom4 = []
          this.seen = false
        }
      }
    },
    selectPos1 () {
      console.log('length players room 1 ----', this.playersRoom1.length)
      if (this.playersRoom1.length === 0) {
        this.position = 'Police1'
        this.seen = true
      } else {
        if (this.playersRoom1[0].position === 'Police1') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      this.room = 1
    },
    selectPos2 () {
      if (this.playersRoom2.length === 0) {
        this.position = 'Police2'
        this.seen = true
      } else {
        if (this.playersRoom2[0].position === 'Police2') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      this.room = 2
    },
    selectPos3 () {
      if (this.playersRoom3.length === 0) {
        this.position = 'Police3'
        this.seen = true
      } else {
        if (this.playersRoom3[0].position === 'Police3') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      this.room = 3
    },
    selectPos4 () {
      if (this.playersRoom4.length === 0) {
        this.position = 'Police4'
        this.seen = true
      } else {
        if (this.playersRoom4[0].position === 'Police4') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      this.room = 4
    },
    selectTer1 () {
      if (this.playersRoom1.length === 0) {
        this.position = 'Terorist1'
        this.seen = true
        // console.log("------- room 1 terrrr",this.playersRoom1)
      } else {
        if (this.playersRoom1[0].position === 'Terorist1') {
          alert('Terorist has been taken! Please choose another room or select Police.')
          this.seen = false
        }
      }
      this.room = 1
    },
    selectTer2 () {
      this.position = 'Terorist2'
      this.seen = true
      this.room = 2
    },
    selectTer3 () {
      this.position = 'Terorist3'
      this.seen = true
      this.room = 3
    },
    selectTer4 () {
      this.position = 'Terorist4'
      this.seen = true
      this.room = 4
    }
  }
}
</script>

<style scoped>
.name{
  width: 400px;
  height: 50px;
  border-radius: 5px;
}
.btnInputName{
  width: 70px;
  height: 48px;
  border-radius: 5px;
  background-color: aquamarine;
}
/* .vs{
  padding-top: 5px;
} */
.col-sm-2 {
  margin-top: 50px;
}
.box{
  border: 1px solid aquamarine;
  margin-right: 60px;
  margin-bottom: 50px;
  margin-left: 20px;
}
</style>
