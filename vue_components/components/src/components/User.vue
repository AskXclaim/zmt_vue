<template>
  <div class="border-dashes-2-px margin-padding-5-px-all">
    <div>
      <label for="dateOfBirth">Select your Birth Date:</label>
      <input id="dateOfBirth" type="date"
             :value="birthDate"
             @change="onBirthDateChange">
    </div>
    <div>
      <label for="cbDateOfBirth">Select your Birth Date:</label>
      <input id="cbDateOfBirth" type="date"
             :value="birthDate"
             @change="onCbBirthDateChange">
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    onCbBirthDateChangeEvent: {
      type: Function,
      required: true,
    }
  },
  emits: ["onBirthDateChangeEvent"],
  data() {
    return {
      age: "",
      birthDate: new Date(),
    }
  },
  methods: {
    onBirthDateChange(event) {
      this.birthDate = event.target.value;
      this.$emit("onBirthDateChangeEvent", this.birthDate);
    },
    onCbBirthDateChange(event) {
      this.birthDate = event.target.value;
      this.onCbBirthDateChangeEvent(this.birthDate);
    }
  }
}
</script>

<style scoped lang="scss">
.border-dashes-2-px {
  border: dashed darkseagreen 2px;
}

.margin-padding-5-px-all {
  margin: 5px;
  padding: 5px;
}

</style>
