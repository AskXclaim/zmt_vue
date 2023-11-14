<template>
  <div class="flex flex-col">
    <musicAppMenuBar />
    <musicAppBanner />
    <div>musicapp song list</div>
    <div>music app audio player</div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import musicAppMenuBar from '@/components/music_app/MusicAppMenuBar.vue'
import musicAppBanner from '@/components/music_app/MusicAppBanner.vue'

export default defineComponent({
  components: { musicAppBanner, musicAppMenuBar }
})
</script>
<style scoped></style>
