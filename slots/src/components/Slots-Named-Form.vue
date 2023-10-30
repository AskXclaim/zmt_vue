<template>
  <slot>
    <div class="div-flex-row">
      <h2>I'm a named slot form example.</h2>
    </div>
    <div class="div-flex-column">
      <slot name="named-slot-header"/>
    </div>
    <div class="div-flex-column">
      <slot name="named-slot-help">
        I'm the default help.
      </slot>
    </div>
    <div class="div-flex-column">
      <slot>
        I'm not named in a named example
      </slot>
    </div>
  </slot>
</template>
<script>
export default {
  name: "Slots-Named-Form",
}
</script>
<style lang="scss" scoped>
.div-flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.div-flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>