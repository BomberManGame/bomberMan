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
        //db ref nya ke 'bomber/room? dari localstorage
        let room = localStorage.getItem("room")
        console.log(room)
        var getBoomSize = db.ref('bomber/'+ `room${room}`)
        console.log(getBoomSize)
         getBoomSize.on('value',(snapshot)=> {
            this.getBomb(snapshot.val());
            // this.play()
        })
        
    },
    methods:{
        getBomb(val){
             console.log("======boom======",val.boom)
             console.log("=======room=====",val.roomId)
             console.log("===police====",val.police)
             console.log("===teror===",val.teror)
            this.boomSize = val.boom
            this.explode(val.boom)
             this.roomId = val.roomId
        }, 
        createRoom(){
            // console.log("create 001")
            // db.ref('bomber/' + 'room'+1).set({
            //     roomId: 1,
            //     teror: '',
            //     police :'',
            //     bomb: 100,
            // });
        },
        upSize(){
            console.log("upsize", this.boomSize + 5)
            console.log(postData,this.roomId, this.boomSize, upgradeBoom)
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
        downSize(){
            console.log("downsize", this.boomSize - 5)
            console.log(postData,this.roomId, this.boomSize, upgradeBoom)
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
        play(){
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
                updates['/bomber'+`/room${room}`] = postData;
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
            if(num >= 1005){
                this.isExplode = true
                this.isWinner = false
                this.isPlay = false
            }else if(num < 1000 && num > 0){
                this.isExplode = false
            }else if(num <= 0){
                this.isWinner = true
                this.isExplode = false
                this.isPlay = false
            }
        }
    }
}
</script>
