<template>
  <div class="div-default-flex-setup div-size">
    {{ question }}
  </div>
</template>
<script>
export default {
  name: "QuizQuestion",
  props: {
    question: {
      type: String,
      required: true,
      validator(value) {
        return !(!value || typeof value !== "string" || value?.trim().length === 0);
      }
    }
  }
}
</script>
<style scoped lang="scss">

</style>