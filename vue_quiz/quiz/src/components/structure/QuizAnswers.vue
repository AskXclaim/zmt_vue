<template>
  <div class="div-default-flex-setup div-size " v-for="(answer, index) in answers">
    <quizAnswer :answer="answer"/>
  </div>
</template>
<script>
import quizAnswer from "@/components/structure/QuizAnswer.vue";

export default {
  name: "QuizAnswers",
  components: {quizAnswer},
  props: {
    answers: {
      type: Array,
      required: true,
      validator(value) {
        if (!value || !Array.isArray(value) || value.length === 0) {
          throw new Error("Please provide a valid 'Questions' prop. " +
              "Note that an empty array isn't a valid entry.");
        }

        return true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
div {
  background: #fff8dc;
  color: #222222;
  cursor: pointer;
}

div:hover {
  background: darken(#fff8dc, 20%);
  font-weight: bold;
}
</style>