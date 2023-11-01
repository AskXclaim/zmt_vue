<template>
  <div class="addItem-div-flex-column">
    <div class="addItem-div-flex-row">
      <input maxlength="100" type="text" v-model="inputValue" @input="onInputFocus"/>
      <button @click="onAddItem">Add</button>
    </div>
    <h5 v-if="!isInputValueValid" class="errorText">Please ensure you enter at least two characters</h5>
  </div>
</template>
<script>
export default {
  name: "AddItem",
  emits: ["onAddItemEvent"],
  data() {
    return {
      inputValue: "",
      isInputValueValid: true,
    }
  },
  methods: {
    onAddItem() {
      const inputText = this.inputValue.trim();
      console.log(inputText);
      if (inputText) {
        this.$emit("onAddItemEvent", inputText);
        this.inputValue = "";
        this.isInputValueValid = true;
      } else {
        this.isInputValueValid = false;
      }
    },
    onInputFocus() {
      if (!this.isInputValueValid)
        this.isInputValueValid = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.addItem-div-flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.addItem-div-flex-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

input {
  display: inline-block;
  line-height: 30px;
  padding-left: 15px;
  width: 290px;
  max-width: 300px;
  border-radius: 10px;
  border: solid 1px #e1d8d8;
  outline-color: #fadada;
  margin: 10px 10px 2px;
}

button {
  border-radius: 10px;
  border: solid 1px #e1d8d8;
  display: inline-block;
  min-height: 30px;
  font-weight: normal;
  padding: 5px;
  color: #2c0505;
  cursor: pointer;

  &:hover {
    min-height: 35px;
    font-size: larger;
  }
}

.errorText {
  color: #900202;
  margin: 0 0 0 20px;
}
</style>