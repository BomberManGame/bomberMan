<template>
    <div>
        <div class="row">
            <button v-on:click="upSize">
                Increase font size
            </button>
            <button v-on:click="downSize">
                Decrease font size
            </button>
        </div>
        <br>
        <div class="row">
            <img v-if="isPlay" src="/img/bomb.gif" alt="bomb" v-bind:height="boomSize" v-bind:width="boomSize">
            <img v-if="isExplode" src="/img/explode.gif" alt="bomb" height="100%" width="100%">
             <img v-if="isWinner" src="/img/winner.gif" alt="bomb" height="100%" width="100%">
            
        </div>
        <button v-on:click="createRoom">create</button>
        <button v-on:click="play">play</button>
        <button v-on:click="exit">exit</button>
        
    </div>
</template>

<script>

import db from '@/firebase/firebase.js'

export default {
   data() {
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
    mounted(){
        var getBoomSize = db.ref('bomber/room1')
        console.log(getBoomSize)
         getBoomSize.on('value',(snapshot)=> {
            this.getBomb(snapshot.val());
            // this.play()
        })
        
    },
    methods:{
        getBomb(val){
             console.log("======boom======",val.boom)
             console.log("============",val.roomId)
             this.boomSize = val.boom
             console.log("============",val.police)
             this.roomId = val.roomId
             console.log("============",val.teror)
             this.explode(val.boom)
        }, 
        createRoom(){
            // console.log("create 001")

            // db.ref('bomber/' + 'room'+1).set({
            //     roomId: 2,
            //     teror: '',
            //     police :'',
            //     bomb: 100,
            // });
        },
        upSize(){
            console.log("upsize", this.boomSize + 5)
            let upgradeBoom = this.boomSize + 5
            var postData = {
                roomId : 1,
                police : this.police,
                teror: this.teror,
                boom : upgradeBoom
            }
            console.log(postData,this.roomId, this.boomSize, upgradeBoom)
             var updates = {};
            updates['/bomber'+'/room1'] = postData;
           return db.ref().update(updates);

        },
        downSize(){
            console.log("upsize", this.boomSize - 5)
            let upgradeBoom = this.boomSize - 5
            var postData = {
                roomId : 1,
                police : this.police,
                teror: this.teror,
                boom : upgradeBoom
            }
            console.log(postData,this.roomId, this.boomSize, upgradeBoom)
             var updates = {};
            updates['/bomber'+'/room1'] = postData;
           return db.ref().update(updates);
        },
        play(){
            let room = localStorage.getItem('room')
            localStorage.setItem("room", 1)
            if(room){
                this.isPlay = true
                this.isExplode = false
                this.isWinner = false
                
          
                var postData = {
                    roomId : 1,
                    police : this.police,
                    teror: this.teror,
                    boom : 200
                }
          
                var updates = {};
                updates['/bomber'+'/room1'] = postData;
                return db.ref().update(updates);
                    
            }else{
                this.isPlay = false
            }
        },
        exit(){
            console.log("harusnya exit")
            localStorage.removeItem("room")
            this.isPlay = false
        },
        explode(num){
            console.log("explodeee",num)
            console.log("this play",this.isPlay)
            if(num > 300){
                this.isExplode = true
                this.isPlay = false
            }else if(num < 200 && num > 0){
                this.isExplode = false
            }else if(num < 0){
                this.isWinner = true
                this.isPlay = false
            }
        }
    },
    computed:{
        
    }
}
</script>
