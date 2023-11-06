<template>
  <div class="div-default-flex-setup">
    <quizProgressBar/>
    <quizQuestion :question="questions[0]"/>
    <quizAnswers :answers="answers"/>
    <quizResult/>
  </div>
</template>
<script>
import quizProgressBar from "@/components/structure/QuizProgressBar.vue";
import quizQuestion from "@/components/structure/QuizQuestion.vue";
import quizAnswers from "@/components/structure/QuizAnswers.vue";
import quizResult from "@/components/structure/QuizResult.vue";

export default {
  name: "QuizMain",
  components: {quizProgressBar, quizQuestion, quizAnswers, quizResult},
  data() {
    return {
      questions: ["How old are you"],
      answers: ["17", "18", "19"]
    }
  }
}
</script>
<style scoped lang="scss">

</style>