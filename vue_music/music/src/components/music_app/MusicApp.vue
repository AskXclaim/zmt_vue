<template>
  <div class="flex flex-col">
    <musicAppMenuBar />
    <musicAppBanner />
    <musicAppPlayList />
    <musicAppAudioPlayer />
    <div v-if="isOpen">
      <musicAppRegisterLoginModal />
    </div>
  </div>
</template>
<script>
import useModalStore from '@/stores/modalStore'
import { mapState } from 'pinia'

import musicAppMenuBar from '@/components/music_app/MusicAppMenuBar.vue'
import musicAppBanner from '@/components/music_app/MusicAppBanner.vue'
import musicAppPlayList from '@/components/music_app/MusicAppPlayList.vue'
import musicAppAudioPlayer from '@/components/music_app/MusicAppAudioPlayer.vue'
import musicAppRegisterLoginModal from '@/components/music_app/modal/MusicAppRegisterLoginModal.vue'

export default {
  name: 'MusicApp',
  components: {
    musicAppRegisterLoginModal,
    musicAppAudioPlayer,
    musicAppPlayList,
    musicAppBanner,
    musicAppMenuBar
  },
  computed: {
    ...mapState(useModalStore, ['isOpen'])
  }
}
</script>
<style scoped></style>
