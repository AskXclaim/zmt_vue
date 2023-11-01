<template>
  <div class="div-flex-main">
    <button @click="onButtonClick">Js & Css animations</button>
    <transition name="zoomFaded" :css="true" appear
                @enter="onEnter" @leave="onLeave">
      <h2 v-if="zoomed & faded"> Js & Css Animation</h2>
    </transition>
    <h3 v-if="animated">Animation in...</h3>
    <!--    <h3 v-else>Animation out...</h3>-->
  </div>
</template>
<script>
export default {
  name: "JsCssComponent",
  data() {
    return {
      zoomed: true,
      faded: true,
      animated: true,
    }
  },
  methods: {
    onButtonClick() {
      this.faded = !this.faded;
      this.zoomed = !this.zoomed;
    },
    // Remember that when combining Js with Css for animations
    // you can pass the done parameter in the enter and or leave
    onEnter(element) {
      this.animated = true;
    },
    onLeave(element) {
      this.animated = false;
    }
  }
}
</script>
<style scoped lang="scss">
.div-flex-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  height: 100px;
  width: 100px;
  color: #281d0d;
  cursor: pointer;
  font-size: 16px;
  border: solid 1px #f5f5dc;
  border-radius: 100%;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);

  &:hover {
    height: 106px;
    width: 106px;
    color: #462803;
    font-size: 18px;
    border: solid 2px #f5f5dc;
    background: rgb(238, 174, 202);
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(160, 191, 227, 1) 100%);
  }
}

.zoomFaded-enter-from {
  opacity: 0;
}

.zoomFaded-enter-active {
  opacity: 1;
  animation: zoom-in 3s linear forwards;
  //transition: all 1s linear;
}

.zoomFaded-leave-active {
  //opacity: 0;
  animation: zoom-out 3s linear forwards;
  //transition: all 1s linear;
}

//.zoomFaded-leave-to {
//  opacity: 0;
//}

@keyframes zoom-in {
  from {
    transform: scale3d(0, 0, 0);
  }
  to {
    transform: scale3d(1, 1, 1);
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