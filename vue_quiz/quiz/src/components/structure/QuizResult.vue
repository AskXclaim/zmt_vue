<template>
  <div class="div-default-flex-setup div-size div-main-quizResult">
    {{ message }}
  </div>
  <quizResultDescriptionSummary :total-correct-answers="totalCorrectAnswers"
                                :total-in-correct-answers="totalInCorrectAnswers"
                                :total-number-of-questions="totalNumberOfQuestions"/>

</template>
<script>
import quizResultDescriptionSummary from "@/components/structure/QuizResultDescriptionSummary.vue"

export default {
  name: "QuizResult",
  components: {quizResultDescriptionSummary},
  props: {
    isLastAnswerCorrect: {
      required: true,
    },
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
    message() {
      if (this.isLastAnswerCorrect === true)
        return "Your answer is correct!";

      if (this.isLastAnswerCorrect === false)
        return "Sorry, your answer is wrong";

      return "";
    }
  }

}
</script>

<style scoped lang="scss">
.div-main-quizResult {
  background: #98B11D;
  font-size: 1em;
  color: #f5f5f5;
}

</style>