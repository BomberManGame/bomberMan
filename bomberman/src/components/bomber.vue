<template>
  <div class="bombers">
    <p><h1> POLICE </h1> VS  <h1> TERORIS </h1>
  <div class="row">
  <div v-bind:class="cols">
      <h1> TERORIS </h1>

  <img v-if='exist' @click="add" width="200px" src="../assets/bluebutton.gif"/>
  <img  v-if='show1' width="300px" src="../assets/win.jpg"/>
  <img v-if='kalah' width="300px" src="../assets/loose.jpg"/>
</div>



  <div v-if='exist' class="col-sm-4" >
  <img v-if='exist' v-bind:width="width" src="../assets/bom.gif"/></div>
  <div v-bind:class="cols">
      <h1> POLICE  </h1>
  <img v-if='exist' @click="mins"  width="200px" src="../assets/redbutton.gif"/>
    <img v-if='show' width="350px" src="../assets/win.jpg"/>
    <img v-if='kalah1' width="300px" src="../assets/loose.jpg"/>
  </div>


  </div>
  </div>
</template>


<script>
var firebase = require('firebase');
import database from '@/firebase/firebase.js'

export default {
  name: 'bomber',
  props: {
    msg: String
  },   data(){
      return {
        satu:0,
        width:10,
        show:false,
        show1:false,
        kalah:false,
        kalah1:false,
        exist:true,
        cols:'col-sm-4'
      }

    }, methods:{

    add:function(){
      this.satu +=1 //cek only
      this.width += 2

      if(this.width == 100){
        alert('TERORIS WIN ')

        swal("TERORIS WIN !");
        this.show1 = true,
        this.kalah1 = true
        this.exist = false,
        this.cols = 'col-sm-6'
      }

      console.log(this.satu)
    },
    mins:function(){
      this.satu-=1 //cek only
        this.width -=2
        if(this.width == 0){
          alert('POLICE WIN ')
              swal("POLICE WIN !");
          this.show = true;
            this.kalah = true
          this.exist = false
          this.cols = 'col-sm-6'
        }
      console.log(this.satu) //cek only
    }

  }
}

</script>
