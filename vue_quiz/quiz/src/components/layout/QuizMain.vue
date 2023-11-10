<template>
  <div v-if="isLoaded" class="div-default-flex-setup">
    <quizProgressBar :currentQuestion="currentQuestion" :totalQuestions="totalNumberOfQuestions"/>
    <quizQuestion :question="question"/>
    <quizAnswers :answers="answers" @onAnAnswerClickedEvent="onAnAnswerClickedEvent"/>
    <quizResult :is-last-answer-correct="answerIsCorrect" :total-correct-answers="result.totalCorrectAnswer"
                :total-in-correct-answers="result.totalIncorrectAnswer"
                :total-number-of-questions="totalNumberOfQuestions"/>
    <quizReset @onQuizResetEvent="onQuizResetEvent"/>
  </div>
  <div v-else class="div-default-flex-setup">
    <div class="spinner"></div>
  </div>
</template>
<script>
import quizProgressBar from "@/components/structure/QuizProgressBar.vue";
import quizQuestion from "@/components/structure/QuizQuestion.vue";
import quizAnswers from "@/components/structure/QuizAnswers.vue";
import quizResult from "@/components/structure/QuizResult.vue";
import quizReset from "@/components/structure/QuizRest.vue";
import {getQuestionAndAnswers} from "../../../data/questions";

export default {
  name: "QuizMain",
  components: {quizReset, quizProgressBar, quizQuestion, quizAnswers, quizResult},
  data() {
    return {
      isLoaded: false,
      totalNumberOfQuestions: 10,
      currentQuestion: 0,
      question: "no - question",
      result: {
        totalCorrectAnswer: 0,
        totalIncorrectAnswer: 0,
      },
      answers: ["no-answer"],
      correctAnswer: "",
      answerIsCorrect: null
    }
  },
  async mounted() {
    try {
      await this.setupNewQuestionAndAnswers();
      this.isLoaded = true;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async setupNewQuestionAndAnswers() {
      if (this.currentQuestion === this.totalNumberOfQuestions)
        return;

      const questionAndAnswers = await this.getQuestionAndAnswer();
      this.question = questionAndAnswers.question;
      this.answers = this.getShuffledAnswers(questionAndAnswers.incorrectAnswers, questionAndAnswers.correctAnswer);
      this.correctAnswer = questionAndAnswers.correctAnswer;
      this.currentQuestion += 1;
    },
    async getQuestionAndAnswer() {
      return await getQuestionAndAnswers();
    },
    /**
      Returns shuffled answers to prevent the correct answer
      from always been in the same position
     @param {Array} incorrectAnswers
     @param {Number} correctAnswer
     @returns {Number}
     */
    getShuffledAnswers(incorrectAnswers, correctAnswer) {
      const answers = [...incorrectAnswers];
      const index = Math.floor(Math.random() * (incorrectAnswers.length + 1));
      answers.splice(index, 0, correctAnswer);

      return answers;
    },
    onAnAnswerClickedEvent(answer) {
      console.log(answer);
      if (answer && this.correctAnswer === answer) {
        this.result.totalCorrectAnswer += 1;
        this.answerIsCorrect = true;
      } else {
        this.result.totalIncorrectAnswer += 1;
        this.answerIsCorrect = false;
      }

      setTimeout(() => {
        this.setupNewQuestionAndAnswers();
        this.answerIsCorrect = null;
      }, 3000);

    },
    onQuizResetEvent() {
      this.totalNumberOfQuestions = 10;
      this.currentQuestion = 0;
      this.question = "no - question";
      this.result = {
        totalCorrectAnswer: 0,
        totalIncorrectAnswer: 0,
      };
      this.answers = ["no-answer"];
      this.correctAnswer = "";
      this.answerIsCorrect = null;

      this.setupNewQuestionAndAnswers();
    }
  }
}
</script>
<style scoped lang="scss">
.spinner {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 14.1px solid #dbdcef;
  border-right-color: #1d97af;
  animation: spinner-animation 1s infinite linear;
}

@keyframes spinner-animation {
  to {
    transform: rotate(1turn);
  }
}
</style>