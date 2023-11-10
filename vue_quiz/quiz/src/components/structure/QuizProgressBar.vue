<template>
  <div class="div-default-flex-setup div-size div-qiz-progressBar-Main">
    <div class="bar" :style="{width:`${(currentQuestion/totalQuestions) *100}%`}">
      <div class="bar-text">
        {{ currentQuestion }} out of {{ totalQuestions }} questions

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quizProgressBar",
  props: {
    totalQuestions: {
      type: Number,
      required: true
    },
    currentQuestion: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.div-qiz-progressBar-Main {
  background: #98B11D;
  align-items: flex-start;
  font-size: 1em;
  color: #f5f5f5;
  padding: 0;
  height: 40px;
}

.bar {
  display: flex;
  align-items: center;
  background-color: #0c5664;
  box-sizing: border-box;
  position: relative;
  height: 40px;
  margin: 0;
  transition: all 0.3s linear;
}

.bar-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  width: 300px;
  margin: 0;
  position: absolute;
  background: rgba(3, 172, 240, 0.2);
}
</style>