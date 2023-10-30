<template>
  <slot>
    <button class="btn-style" type="submit">Send</button>
  </slot>
</template>

<script>
export default {
  name: "Slots-FormSubmitButton"
};
</script>

<style scoped>
.btn-style {
  background-color: aliceblue;
  border-radius: 10px;
  position: absolute;
  left: 280px;
  cursor: pointer;
}
</style>