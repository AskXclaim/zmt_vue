<template>
  <div class="div-flex">
    <button @click="onButtonClick">Java-scripted fade</button>
    <transition name="fade" appear :css="false"
                @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
                @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave">
      <h2 v-show="faded">Java-scripted!</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "JavascriptFader",
  data() {
    return {
      faded: false,
    }
  },
  methods: {
    onButtonClick() {
      this.faded = !this.faded;
    },
    onBeforeEnter(element) {
      console.log("I am beforeEnter event", element);
    },
    onEnter(element, done) {
      console.log("I am enter event", element);
      const animation = element.animate([{transform: "scale3d(0,0,0)"}, {transform: "scale3d(1,1,1)"}], {
        duration: 1000
      });
      animation.onfinish = () => {
        done();
      };
    },
    onAfterEnter(element) {
      console.log("I am afterEnter event", element);
    },
    onBeforeLeave(element) {
      console.log("I am beforeLeave event", element);
    },
    onLeave(element, done) {
      console.log("I am leave event", element);
      //NB leaving the object empty means it would use whatever properties
      // are the browser's default.
      const animation = element.animate([{}, {transform: "scale3d(0,0,0)"}], {
        duration: 1000
      });
      animation.onfinish = () => {
        done();
      };
    }, onAfterLeave(element) {
      console.log("I am afterLeave event", element);
    }
  }
}
</script>

<style scoped lang="scss">
.div-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 10px;
}

button {
  cursor: pointer;
  height: 100px;
  width: 100px;
  border: #004d7a solid 1px;
  border-radius: 100%;
  color: #f0f8ff;
  font-size: 16px;
  /*
    * Created with https://www.css-gradient.com
    * Gradient link: https://www.css-gradient.com/?c1=b9900b&c2=c3d2c3&gt=r&gd=dcc
  */
  background: #B9900B;
  background: radial-gradient(at center, #B9900B, #C3D2C3);

  &:hover {
    height: 105px;
    width: 105px;
    font-size: 18px;
    color: #faebd7;
    border: #567590 solid 2px;
  }
}
</style>