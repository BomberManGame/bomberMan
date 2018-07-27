<template>
    <div id="AddPlayer">
        <div class="row">
            <div class="col-sm-6">

                <div id="police">
                    <table align="center" class="player">
                        <tr>
                            <th class="table-header">Police Here</th>
                        </tr>
                         <tr>
                            <tr>
                                <img class="image" src="../../src/assets/police.png" alt="police">
                            </tr>
                        </tr>
                         <tr>
                            <th class="table-header">Player: {{ /* police name from data */ }</th>
                        </tr>
                    </table>

                </div>

            </div>

            <div class="col-sm-6">
                <div id="terrorist">
                    <table align="center" class="player">
                        <tr>
                            <th class="table-header">Terrorist Here</th>
                        </tr>
                         <tr> 
                            <img class="image" src="../../src/assets/terorism.png" alt="police">
                        </tr>
                         <tr>
                            <th class="table-header">Player:{{ /* terrorist name from data */ } </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        <div align="center">
            <button v-on:click="startGame()" class="btnStart">
                GO!
            </button>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert';
import db from '@/firebase/firebase.js'
import Homepage from '@/components/Homepage.vue'

export default {
    name: 'add-player',
    props: [],
  
    data () {
        return {
            name: '',
            players: {
                police: 'Police',
                terrorist: 'Terrorist'
            }
        }

    },

     mounted () {
        //db ref nya ke 'bomber/room? dari localstorage
        let room = localStorage.getItem("room")
        console.log(room)
        if(room === undefined){
        alert('Please select room to play the game!')
        this.$router.replace('/homepage')
        } else {
            var getBoomSize = db.ref('bomber/'+ `room${room}`)
            console.log(getBoomSize)
            getBoomSize.on('value',(snapshot)=> {
                this.getBomb(snapshot.val());
                //this.play()
            })
        }
     },

    methods: {
        startGame() {
            if (!this.players.police || !this.players.terrorist) {
                console.log('Players havent been aded')
                swal("Hold On!", "Please wait for your opponent", "warning");
            }
            else {
                swal("Lets GO!", "", "success");
                console.log('redirect to game')
                this.$router.replace('/game')


            }
        }

    }
}
</script>

<style scoped>
    #police {
        padding-left: 20px;
    }

.image {
    height: 85%;
    width: 85%;    
}

.player {
    font-size: 20px;
}
.btnStart{
  width: 70px;
  height: 48px;
  border-radius: 5px;
  background-color: aquamarine;
}

.table-header {
    text-align: center;
}

</style>
