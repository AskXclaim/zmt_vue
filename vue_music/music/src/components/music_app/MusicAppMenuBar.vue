<template>
  <div class="flex flex-row items-center pl-20 text-white bg-slate-700 h-24">
    <div class="font-bold text-2xl cursor-pointer hover:font-extrabold hover:text-3xl">Music</div>
    <div class="font-thin">
      <ul class="list-none cursor-pointer">
        <li class="hover:font-bold">Login/Register</li>
        <li class="hover:font-bold">Manage</li>
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
}
</style>
