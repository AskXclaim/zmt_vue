<template>
  <div>
    <select @change="onSelectChange">
      <option value="DynamicComponentHome">Home</option>
      <option value="DynamicComponentAbout">About Us</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DynamicComponentMenu",
  //
  // data() {
  //   return {
  //     componentName: "Home"
  //   }
  // }, 
  emits:["onSelectChangeEvent"],
  methods: {
    onSelectChange(event) {
      this.$emit("onSelectChangeEvent", event.target.value.trim());
    }
  }
}
</script>
<style scoped>

</style>