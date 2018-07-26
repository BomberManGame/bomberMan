<template>
  <div>
    <LoadingHeader> </LoadingHeader>
    <AddPlayer> </AddPlayer>
  </div>

</template>

<script>
import LoadingHeader from '@/components/LoadingHeader.vue'
import AddPlayer from '@/components/AddPlayer.vue'

export default {
    components: {
      LoadingHeader,
      AddPlayer
    }
}
</script>

<style scoped>

</style>