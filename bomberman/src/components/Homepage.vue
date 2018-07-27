<template>
  <div class="container text-center">
    <h1>BOMBERMAN</h1><br>
    <div v-if="seen">
        <h2>And please input your name here:</h2>
        <input type="text" class="name" v-model="name" placeholder="Input your name...">
        <button class="btnInputName" @click="submitPlayer">Submit</button>
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
          <div class="col-sm-5" @click="selectPos1" v-bind:style="{border: borderPolice1+ 'px solid red'}">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room1</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer1" v-bind:style="{border: borderTer1+ 'px solid red'}">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos2" v-bind:style="{border: borderPolice2+ 'px solid red'}">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room2</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer2" v-bind:style="{border: borderTer2+ 'px solid red'}">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos3" v-bind:style="{border: borderPolice3+ 'px solid red'}">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room3</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer3" v-bind:style="{border: borderTer3+ 'px solid red'}">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>

        <div class="box col-sm-5">
          <div class="col-sm-5" @click="selectPos4" v-bind:style="{border: borderPolice4+ 'px solid red'}">
            <img src="../../src/assets/police.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Police</p>
          </div>
          <div class="col-sm-2">
            <h5>Room4</h5>
            <img src="../../src/assets/vs.png" class="vs" style="width:100%" alt="Image">
          </div>
          <div class="col-sm-5" @click="selectTer4" v-bind:style="{border: borderTer4+ 'px solid red'}">
            <img src="../../src/assets/terorism.png" class="img-responsive" style="width:100%" alt="Image">
            <p>Terorist</p>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import db from '@/firebase/firebase.js'

export default {
  name: 'homepage',
  props: [],
  data () {
    return {
      borderPolice1 : '',
      borderPolice2 : '',
      borderPolice3 : '',
      borderPolice4 : '',
      borderTer1: '',
      borderTer2: '',
      borderTer3: '',
      borderTer4: '',
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
  mounted() {
    localStorage.clear()
  },
  methods: {
    submitPlayer () {
        localStorage.setItem('name', this.name)
        localStorage.setItem('position', this.position.slice(0,-1))
      if (this.position.slice(-1) === '1') {
        this.playersRoom1.push({name: this.name, position: this.position})
        db.ref('bomber/' + 'room' + 1 +`/${this.position.slice(0,-1)}`).push().set({
          roomId: 1,
          name: this.name,
          position :this.position.slice(0,-1)
        });
        console.log('posisi room 1 coba teroris-------', this.playersRoom1)
        this.name = ''
        this.seen = false
        if (this.playersRoom1.length === 1) {
          // console.log('yuk main room 1', this.playersRoom1)
          this.$router.replace('/loading')
          this.playersRoom1 = []
          this.seen = false
        }
      }
      if (this.position.slice(-1) === '2') {
        this.playersRoom2.push({name: this.name, position: this.position})
        db.ref('bomber/' + 'room' + 2 +`/${this.position.slice(0,-1)}`).push().set({
          roomId: 2,
          name: this.name,
          position :this.position.slice(0,-1)
        });
        this.name = ''
        this.seen = false
        if (this.playersRoom2.length === 1) {
          this.$router.replace('/loading')
          console.log('yuk main room 2', this.playersRoom2)
          this.playersRoom2 = []
          this.seen = false
        }
      }
      if (this.position.slice(-1) === '3') {
        this.playersRoom3.push({name: this.name, position: this.position})
        db.ref('bomber/' + 'room' + 3 +`/${this.position.slice(0,-1)}`).push().set({
          roomId: 3,
          name: this.name,
          position :this.position.slice(0,-1)
        });
        this.name = ''
        this.seen = false
        if (this.playersRoom3.length === 1) {
          this.$router.replace('/loading')
          console.log('yuk main room 3', this.playersRoom3)
          this.playersRoom3 = []
          this.seen = false
        }
      }
      if (this.position.slice(-1) === '4') {
        this.playersRoom4.push({name: this.name, position: this.position})
        db.ref('bomber/' + 'room' + 4 +`/${this.position.slice(0,-1)}`).push().set({
          roomId: 4,
          name: this.name,
          position :this.position.slice(0,-1)
        });
        this.name = ''
        this.seen = false
        if (this.playersRoom4.length === 1) {
          this.$router.replace('/loading')
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
        this.borderPolice1 = 2
        this.borderPolice2 = 0
        this.borderPolice3 = 0
        this.borderPolice4 = 0
        this.borderTer1 = 0
        this.borderTer2 = 0
        this.borderTer3 = 0
        this.borderTer4 = 0
        // console.log("-----police 1 border",this.borderPolice1 );
        
      } else {
        if (this.playersRoom1[0].position === 'Police1') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      // this.room = 1
      localStorage.setItem('room', 1)
    },
    selectPos2 () {
      if (this.playersRoom2.length === 0) {
        this.position = 'Police2'
        this.seen = true
        this.borderPolice1 = 0
        this.borderPolice2 = 2
        this.borderPolice3 = 0
        this.borderPolice4 = 0
        this.borderTer1 = 0
        this.borderTer2 = 0
        this.borderTer3 = 0
        this.borderTer4 = 0
        console.log("-----police 2 room",this.playersRoom2 )
      } else {
        if (this.playersRoom2[0].position === 'Police2') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      // this.room = 2
      localStorage.setItem('room', 2)

    },
    selectPos3 () {
      if (this.playersRoom3.length === 0) {
        this.position = 'Police3'
        this.seen = true
        this.borderPolice1 = 0
        this.borderPolice2 = 0
        this.borderPolice3 = 2
        this.borderPolice4 = 0
        this.borderTer1 = 0
        this.borderTer2 = 0
        this.borderTer3 = 0
        this.borderTer4 = 0
        console.log("-----police 3 room",this.playersRoom3 );
      } else {
        if (this.playersRoom3[0].position === 'Police3') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      // this.room = 3
      localStorage.setItem('room', 3)
    },
    selectPos4 () {
      if (this.playersRoom4.length === 0) {
        this.position = 'Police4'
        this.seen = true
        this.borderPolice1 = 0
        this.borderPolice2 = 0
        this.borderPolice3 = 0
        this.borderPolice4 = 2
        this.borderTer1 = 0
        this.borderTer2 = 0
        this.borderTer3 = 0
        this.borderTer4 = 0
        console.log("-----police 4 room",this.playersRoom4 );
      } else {
        if (this.playersRoom4[0].position === 'Police4') {
          alert('Police has been taken! Please choose another room or select Terorist.')
          this.seen = false
        }
      }
      // this.room = 4
      localStorage.setItem('room', 4)
    },
    selectTer1 () {
      // if (this.playersRoom1.length === 0) {
      //   this.position = 'Terorist1'
      //   this.seen = true
      //   console.log("------- room 1 terrrr------",this.position)
      // } else {
      //   if (this.playersRoom1[0].position === 'Terorist1') {
      //     alert('Terorist has been taken! Please choose another room or select Police.')
      //     this.seen = true
      //   }
      // }
      // this.room = 1
      this.position = 'Terorist1'
      this.seen = true
      this.borderTer1 = 2
      this.borderTer2 = 0
      this.borderTer3 = 0
      this.borderTer4 = 0
      this.borderPolice1 = 0
      this.borderPolice2 = 0
      this.borderPolice3 = 0
      this.borderPolice4 = 0
      localStorage.setItem('room', 1)
      // this.room = 1
    },
    selectTer2 () {
      // if (this.playersRoom2.length === 0) {
      //   this.position = 'Terorist2'
      //   this.seen = true
      //   console.log("------- room 2 terrrr------",this.position)
      // } else {
      //   if (this.playersRoom2[0].position === 'Terorist2') {
      //     alert('Terorist has been taken! Please choose another room or select Police.')
      //     this.seen = false
      //   }
      // }
      // this.room = 2
      this.position = 'Terorist2'
      this.seen = true
      this.borderTer1 = 0
      this.borderTer2 = 2
      this.borderTer3 = 0
      this.borderTer4 = 0 
      this.borderPolice1 = 0
      this.borderPolice2 = 0
      this.borderPolice3 = 0
      this.borderPolice4 = 0     
      // this.room = 2
      localStorage.setItem('room', 2)
    },
    selectTer3 () {
      // if (this.playersRoom3.length === 0) {
      //   this.position = 'Terorist3'
      //   this.seen = true
      //   console.log("------- room 3 terrrr------",this.position)
      // } else {
      //   if (this.playersRoom3[0].position === 'Terorist3') {
      //     alert('Terorist has been taken! Please choose another room or select Police.')
      //     this.seen = true
      //   }
      // }
      // this.room = 3
      this.position = 'Terorist3'
      this.seen = true
      this.borderTer1 = 0
      this.borderTer2 = 0
      this.borderTer3 = 2
      this.borderTer4 = 0 
      this.borderPolice1 = 0
      this.borderPolice2 = 0
      this.borderPolice3 = 0
      this.borderPolice4 = 0
      // this.room = 3
      localStorage.setItem('room', 3)
    },
    selectTer4 () {
      // if (this.playersRoom4.length === 0) {
      //   this.position = 'Terorist4'
      //   this.seen = true
      //   console.log("------- room 4 terrrr------",this.position)
      // } else {
      //   if (this.playersRoom4[0].position === 'Terorist4') {
      //     alert('Terorist has been taken! Please choose another room or select Police.')
      //     this.seen = true
      //   }
      // }
      // this.room = 4
      this.position = 'Terorist4'
      this.seen = true
      this.borderTer1 = 0
      this.borderTer2 = 0
      this.borderTer3 = 0
      this.borderTer4 = 4
      this.borderPolice1 = 0
      this.borderPolice2 = 0
      this.borderPolice3 = 0
      this.borderPolice4 = 0
      // this.room = 4
      localStorage.setItem('room', 4)
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
