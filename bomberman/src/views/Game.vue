<template>
  <div>
    <button v-on:click="fontSize++">
      Increase font size
    </button>
    <button v-on:click="fontSize--">
      Decrease font size
    </button>

    <p v-bind:style="{ fontSize: fontSize + 'px' }">
      {{ fontSize }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fontSize: 10
    }
  }
}
</script>
