<template>
    <div>
        <div class="row">
            <input type="text" v-model="roomId" placeholder="Room Id">
            <input type="text" v-model="maxsize" placeholder="limit">           
        </div>
    </div>
</template>

<script>

import db from '@/firebase/firebase.js'

export default {
    data(){
        return{
            maxsize :'',
            roomId : '',
        }
    },
    methods:{
        createRoom(){
            console.log(`create ${this.roomId}, with ${maxsize}`)
            db.ref('bomber/' + 'room'+this.roomId).set({
                roomId: this.roomId,
                teror: '',
                police :'',
                bomb: this.maxsize,
            });
        },
    }
}
</script>
