<template>
  <div class="div-default-flex-setup div-size">
    <div class="div-description">Correct answer: {{ totalCorrectAnswers }}</div>
    <div class="div-description">Incorrect answer: {{ totalInCorrectAnswers }}</div>
    <div class="div-description">Total number of questions: {{ totalNumberOfQuestions }}</div>
  </div>
</template>
<script>
export default {
  name: "QuizResultDescriptionSummary",
  props: {
    totalCorrectAnswers: {
      type: Number,
      required: true,
    },
    totalInCorrectAnswers: {
      type: Number,
      required: true,
    },
    totalNumberOfQuestions: {
      type: Number,
      required: true,
    },
  },

}
</script>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: flex-start;
  background: #1d97af;
  color: #f5f5f5;
  font-size: 1em;
}

.div-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>