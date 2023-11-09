<template>
  <div class="div-default-flex-setup div-size">
    {{ currentQuestion }} out of {{ totalQuestions }} questions
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
div {
  background: #98B11D;
  font-size: 1em;
  color: #f5f5f5;
}

</style>