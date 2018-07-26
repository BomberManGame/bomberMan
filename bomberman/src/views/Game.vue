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
            <img src="/img/bomb.gif" alt="bomb" v-bind:height="boomSize" v-bind:width="boomSize">
        </div>
        <button v-on:click="createRoom">create</button>
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
        }
    },
    mounted(){
        var getBoomSize = db.ref('bomber/room1')
        console.log(getBoomSize)
         getBoomSize.on('value',(snapshot)=> {
            this.getBomb(snapshot.val());
        })
        
    },
    methods:{
        getBomb(val){
             console.log("============",val.boom)
             console.log("============",val.roomId)
             this.boomSize = val.boom
             console.log("============",val.police)
             this.roomId = val.roomId
             console.log("============",val.teror)
                        
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
        }
    },
    computed:{
        
    }
}
</script>
