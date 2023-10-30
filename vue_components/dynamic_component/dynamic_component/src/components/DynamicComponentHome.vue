<template>
<h1>I'm the home page</h1>
</template>
<script>
export default {
  name: "DynamicComponentHome",
  
  unmounted() {
    console.log("DynamicComponentHome component unmounted");
  },
  onActivated(){
    console.log("DynamicComponentHome component onActivated");
  },
  onDeactivated(){
    console.log("DynamicComponentHome component onDeactivated");
  },
}
</script>
