<template>
  <div>
    <audio class="w-full" controls>
      <source src="horse.ogg" type="audio/ogg" />
      <source src="horse.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
<script>
export default {
  name: 'MusicAppAudioPlayer'
}
</script>
<style lang="scss" scoped>
audio::-webkit-media-controls-play-button,
audio::-webkit-media-controls-panel {
  background-color: #f1f7fd;
  color: #f1f7fd;
}
</style>
