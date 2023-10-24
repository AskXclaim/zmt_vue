<template>
  <div class="border-dashes-2-px margin-padding-5-px-all">
    <label for="dateOfBirth">Select your Birth Date:</label>
    <input id="dateOfBirth" type="date" 
           :value="birthDate"
    @change="onBirthDateChange">
  </div>
</template>

<script>
export default {
  name: 'User',
  emits:["onBirthDateChangeEvent"],
  data() {
    return {
      age: "",
      birthDate: new Date(),
    }
  },
  methods:{
    onBirthDateChange(event){
      this.birthDate= event.target.value;
      this.$emit("onBirthDateChangeEvent", this.birthDate);
    }
  }
}
</script>

<style scoped lang="scss">
.border-dashes-2-px {
  border: dashed darkseagreen 2px;
}
.margin-padding-5-px-all{
  margin: 5px;
  padding: 5px;
}

</style>
