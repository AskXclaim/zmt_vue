<template>
  <div class="div-default-flex-setup div-size">
    <button @click="()=>this.$emit('onQuizResetEvent')">Reset</button>
  </div>
</template>
<script>
export default {
  name: "QuizReset",
  emits: ["onQuizResetEvent"],
}
</script>
<style scoped lang="scss">
button {
  background: #eef6c7;
  color: #222222;
  cursor: pointer;
  border: solid #1d97af 1px;
  border-radius: 5px;
  font-size: medium;

  &:hover {
    font-weight: bold;
    font-size: large;
  }
}
</style>