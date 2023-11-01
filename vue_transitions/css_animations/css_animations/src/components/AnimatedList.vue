<template>
  <div class="div-flex-main">
    <h1>Ask's Todo List</h1>
    <hr>
    <addItem @onAddItemEvent="onAddItemEvent"/>
  </div>
</template>
<script>
import addItem from "@/components/AddItem.vue";

export default {
  name: "AnimatedList",
  components: {addItem},
  data() {
    return {
      todoList: [],
      undoList: []
    }
  },
  methods: {
    onAddItemEvent(value) {
      this.todoList.push(value);
    }
  }
}
</script>
<style scoped lang="scss">
body {
  font-family: 'Dosis', sans-serif;
}

.div-flex-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  margin-top: 20px;
}

h1 {
  border: none;
  background: transparent;
  font-weight: normal;
}

hr {
  margin: 0;
  border: solid #d3d3d3 2px;
  width: 100%;
}
</style>