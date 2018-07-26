<template>
    <div id="LoadingHeader">
        <!-- Header -->
        <h1 id="greeting">
            Welcome to Bomberman! <br>
            Please wait for the other players to join
        </h1>

        <!-- Loading Icon -->
        <div class="lds-heart"><div>
            <!-- CHANGE IMAGE! -->
            <img src="../assets/logo.png"/>            
        </div></div>
     </div>
   
</template>



<script>
export default {
    
}
</script>


<style scoped>
#greeting {
  background-color: #303338;
  color: white;
}

.lds-heart {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(30deg);
  transform-origin: 32px 32px;
}
.lds-heart div {
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: #fff;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  background: #fff;
}
.lds-heart div:before {
  left: -17px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -17px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}

</style>
