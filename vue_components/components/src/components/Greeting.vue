<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      message: 'Hello, welcome!'
    }
  }
}
</script>

<style scoped lang="scss">
p {
  color: chocolate;

  &:hover {
    color: darken(chocolate, 15%);
  }
}
</style>
