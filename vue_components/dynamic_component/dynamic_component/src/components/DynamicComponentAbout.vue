<template>
  <h1>About us</h1>
</template>
<script>
export default {
  name: "DynamicComponentAbout",
  unmounted() {
    console.log("DynamicComponentAbout component unmounted");
  },
  onActivated() {
    console.log("DynamicComponentAbout component onActivated");
  },
  onDeactivated() {
    console.log("DynamicComponentAbout component onDeactivated");
  },
}
</script>
