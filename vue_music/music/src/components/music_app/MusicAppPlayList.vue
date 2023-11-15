<template>
  <div class="w-full bg-transparent px-14 py-5">
    <div class="rounded-lg bg-blue-50 p-5 text-blue-950 text-lg">
      <div
        class="flex flex-row items-center justify-start border-b border-blue-950 font-extrabold text-xl mb-10"
      >
        Songs
      </div>
      <ul>
        <li>
          <musicAppSong />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import musicAppSong from '@/components/music_app/MainAppSong.vue'

export default {
  name: 'MusicAppPlayList',
  components: { musicAppSong }
}
</script>
<style lang="scss" scoped>
.div-play-list-section {
}
</style>
