<template>
  <div class="div-default-flex-setup div-size " v-for="(answer, index) in answers " :key="index">
    <quizAnswer :answer="answer" @onAnswerClickedEvent="onAnswerClickedEvent"
                :shouldDisable=" shouldDisable" :chosenAnswer="chosenAnswer"/>
  </div>
</template>
<script>
import quizAnswer from "@/components/structure/QuizAnswer.vue";

export default {
  name: "QuizAnswers",
  components: {quizAnswer},
  data() {
    return {
      shouldDisable: false,
      chosenAnswer: ""
    }
  },
  props: {
    answers: {
      type: Array,
      required: true,
      validator(value) {
        return !(!value || !Array.isArray(value) || value.length === 0);
      }
    }
  },
  emits: ["onAnAnswerClickedEvent"],
  updated() {
    const reset = !this.answers.includes(this.chosenAnswer);
    if (reset) {
      this.shouldDisable = false;
      this.chosenAnswer = "";
    }
  },
  methods: {
    onAnswerClickedEvent(answer) {
      this.shouldDisable = true;
      this.chosenAnswer = answer;
      this.$emit("onAnAnswerClickedEvent", answer);
    }
  }
}
</script>

<style scoped lang="scss">

</style>