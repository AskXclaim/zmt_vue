<template>
  <div class="flex flex-col">
    <musicAppMenuBar />
    <musicAppBanner />
    <musicAppPlayList />
    <musicAppAudioPlayer />
  </div>
</template>
<script>
import musicAppMenuBar from '@/components/music_app/MusicAppMenuBar.vue'
import musicAppBanner from '@/components/music_app/MusicAppBanner.vue'
import musicAppPlayList from '@/components/music_app/MusicAppPlayList.vue'
import musicAppAudioPlayer from '@/components/music_app/MusicAppAudioPlayer.vue'

export default {
  name: 'MusicApp',
  components: { musicAppAudioPlayer, musicAppPlayList, musicAppBanner, musicAppMenuBar }
}
</script>
<style scoped></style>
