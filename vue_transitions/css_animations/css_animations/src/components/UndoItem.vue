<template>
  <div class="undoItem-div-flex-main">
    <button :disabled="shouldDisable"
            @click="undoItem">Undo
    </button>
  </div>
</template>
<script>
export default {
  name: "UndoItem",
  props: {
    undoItems: {
      type: Array,
      required: true,
    }
  },
  emits: ["undoItemEvent"],
  methods: {
    undoItem() {
      this.$emit("undoItemEvent");
    }
  },
  computed: {
    shouldDisable() {
      return !(this.undoItems.length > 0);
    }
  }

}
</script>
<style scoped lang="scss">
.undoItem-div-flex-main {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

button {
  border-radius: 2px;
  border: solid 1px #e1d8d8;
  display: inline-block;
  font-size: small;
  color: #2c0505;
  cursor: pointer;
  margin: 0 2px 0 5px;

  &:hover {
    font-size: medium;
    font-weight: bold;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

}
</style>