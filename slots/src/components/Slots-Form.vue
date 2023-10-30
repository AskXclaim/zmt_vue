<template>
  <slot>
    <slotsHeader/>
    <slotsHeader>
      <h3>Contact Us</h3>
    </slotsHeader>
    <div>
      <label for="defaultContactUsEmail">Your Email:</label>
      <input id="defaultContactUsEmail" class="min-width-border-settings" type="email" maxlength="320">
    </div>
    <div>
      <label for="defaultContactUsReason">Your Question:</label>
      <textarea id="defaultContactUsReason" class="min-width-border-settings" maxlength="300" rows="4"/>
    </div>
    <div class="div-align-right">
      <slotsFormSubmitButton/>
    </div>
    <div class="div-align-right">
      <slotsFormSubmitButton>
        <input type="button" value="I'm a button"/>
      </slotsFormSubmitButton>
    </div>
  </slot>
</template>
<script>
import SlotsFormSubmitButton from "./Slots-FormSubmitButton.vue";
import SlotsHeader from "./Slots-Header.vue";

export default {
  name: "slots-form",
  components: {
    slotsFormSubmitButton: SlotsFormSubmitButton,
    slotsHeader: SlotsHeader
  }
};

</script>
<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 2px;
}

.div-align-right {
  position: relative;
  min-height: 30px;
}

button {
  position: absolute !important;
  left: 280px !important;
}

label {
  display: inline-block;
  min-width: 100px;
  text-align: left;
  border: #033434 1px solid;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}

.min-width-border-settings {
  min-width: 200px;
  border: #033434 1px solid;
  border-radius: 10px;
}

input {
  height: 25px;
  padding-left: 10px !important;
}

input:focus, textarea:focus {
  outline: darken(#033434, 20%);
  padding-top: 5px !important;
  padding-left: 10px !important;
}
</style>