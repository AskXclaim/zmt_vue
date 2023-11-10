<template>
  <div class="div-default-flex-setup div-size">
    <div class="div-description">Correct answer: {{ totalCorrectAnswers }}</div>
    <div class="div-description">Incorrect answer: {{ totalInCorrectAnswers }}</div>
    <div class="div-description">Total number of questions: {{ totalNumberOfQuestions }}</div>
    <div v-if="shouldShowWinner" class="div-description div-game-result">{{ getGameResult() }}</div>
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
  computed: {
    shouldShowWinner() {
      return this.totalNumberOfQuestions === (this.totalCorrectAnswers + this.totalInCorrectAnswers);
    }
  },
  methods: {
    getGameResult() {
      if (this.totalCorrectAnswers > this.totalInCorrectAnswers)
        return "You won!"

      if (this.totalInCorrectAnswers > this.totalCorrectAnswers)
        return "Sorry you lost. Why not try again."

      return "It's a tie";
    }
  }
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

.div-game-result {
  margin-top: 3px;
  font-weight: bolder;
  font-size: large;
}
</style>