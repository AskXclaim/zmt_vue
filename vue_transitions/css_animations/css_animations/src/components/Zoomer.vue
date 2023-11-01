<template>
  <div class="div-width">
    <button @click="zoomed=!zoomed">Zoom</button>
<!--    type tells it what duration time it should use-->
<!--    if there are different values to consider.-->
<!--    appear tell vue to show the animation/transition effect on load. -->
    <transition name="zoom" type="animation" appear>
      <h2 v-if="zoomed">Shall we -- if</h2>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Zoomer",
  data() {
    return {
      zoomed: true,
    }
  }
}
</script>
<style scoped lang="scss">
button {
  height: 100px;
  width: 100px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,
      rgba(9, 86, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
}

button:hover {
  height: 102px;
  width: 102px;
  cursor: pointer;
  font-size: 18px;
  color: whitesmoke;
  border-radius: 10px;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,
      rgba(36, 124, 163, 1) 35%, rgba(0, 212, 255, 1) 100%);
}

.div-width {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  padding: 10px;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0)
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>