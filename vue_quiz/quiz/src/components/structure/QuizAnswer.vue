<template>
  <div class="div-default-flex-setup div-size"
       :class="[{disabled:shouldDisable},{selected:chosenAnswer===answer}]"
       v-html="answer"
       @click="onAnswerClicked($event,answer)">
  </div>
</template>
<script>
export default {
  name: "QuizAnswer",
  props: {
    answer: {
      type: String,
      required: true,
      validator(value) {
        return !(!value || typeof value !== "string" || value?.trim().length === 0);
      }
    },
    shouldDisable: {
      type: Boolean,
      required: true
    },
    chosenAnswer: {
      type: String,
    }
  },
  emits: ["onAnswerClickedEvent"],

  methods: {
    onAnswerClicked(event, answer) {
      event.target.classList.add("selected");
      this.$emit("onAnswerClickedEvent", answer);
    }
  }
}
</script>

<style scoped lang="scss">
div {
  background: #eef6c7;
  color: #222222;
  cursor: pointer;

  &:hover {
    background: darken(#eef6c7, 20%);
    font-weight: bold;
  }
}

.selected {
  background: darken(#eef6c7, 20%);
  font-weight: bold;
}

.disabled {
  pointer-events: none;
}


</style>