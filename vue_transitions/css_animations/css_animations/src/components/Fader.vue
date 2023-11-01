<template>
  <div class="div-width">
    <button @click="faded=!faded">Toggle</button>
    <!--  You can apply a duration property in the <transition/> element-->
    <!--  which in turn overrides the duration in the css-->
    <transition name="fade" mode="out-in">
      <h2 v-if="faded">Welcome!</h2>
      <h2 v-else>Welcome! with else</h2>

    </transition>
    <transition name="fadeUsingShow">
      <h2 v-show="faded">Welcome! - I am using v-show</h2>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Fader",
  data() {
    return {
      faded: false,
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  border-radius: 10px;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  color: whitesmoke;
  font-size: 16px;
  height: 100px;
  width: 100px;
  cursor: pointer;
}

.div-width {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  padding: 10px;
}

.fade-enter-from {
  opacity: 0;
}

//use would use the time here
.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.fadeUsingShow-enter-from {
  opacity: 0;
}

//use would use the time here
.fadeUsingShow-enter-active {
  transition: all 1s linear;
}

.fadeUsingShow-leave-to {
  transition: all 1s linear;
  opacity: 0;
}
</style>