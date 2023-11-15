<template>
  <div class="flex flex-row items-center pl-20 text-white bg-slate-700 h-24">
    <div class="font-bold text-2xl">Music</div>
    <div class="font-thin">
      <ul class="list-none">
        <li>Login/Register</li>
        <li>Manage</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicAppMenuBar'
}
</script>

<style lang="scss" scoped>
ul li {
  display: inline-block;
  padding: 5px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    font-weight: bolder;
  }
}
</style>
