<template>
  <div class="div-flex-main">
    <div class="div-flex-header">
      <h1>Animations</h1>
    </div>
    <div class="div-flex-components">
      <fader/>
      <zoomer/>
      <javascriptFader/>
      <jsCssComponent/>
    </div>
  </div>

</template>

<script>
import fader from "@/components/Fader.vue";
import zoomer from "@/components/Zoomer.vue";
import javascriptFader from "@/components/JavascriptFader.vue";
import jsCssComponent from "@/components/JsCssComponent.vue";

export default {
  name: "App",
  components: {jsCssComponent, javascriptFader, zoomer, fader},
}
</script>
<style>
.div-flex-main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.div-flex-components {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 300px;
  margin: 10px 30px 10px 10px;
  min-width: 350px;
  max-width: 80%;
}

.div-flex-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 30px 10px 10px;
}
</style>