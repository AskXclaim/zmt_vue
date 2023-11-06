<template>
  <div class="div-flex-main">
    <h1>Ask's Todo List</h1>
    <hr>
    <addItem @addItemEvent="addItemEvent"/>
    <listItem :items="todoList" :undoItems="undoList"
              @removeItemEvent="removeItemEvent"
              @undoItemEvent="undoItemEvent"/>
    <externalAnimateListItem :items="todoList" :undoItems="undoList"
              @removeItemEvent="removeItemEvent"
              @undoItemEvent="undoItemEvent"/>
  </div>
</template>
<script>
import addItem from "@/components/AddItem.vue";
import listItem from "@/components/ListItem.vue";
import externalAnimateListItem from "@/components/ExternalAnimateListItem.vue";

export default {
  name: "AnimatedList",
  components: {externalAnimateListItem, listItem, addItem},
  data() {
    return {
      todoList: [],
      undoList: []
    }
  },
  methods: {
    addItemEvent(value) {
      this.todoList.splice(this.getAddIndex(), 0, value);
    },
    getAddIndex() {
      return Math.floor(Math.random() * this.todoList.length);
    },
    removeItemEvent(index) {
      this.undoList.push(this.todoList[index]);
      this.todoList.splice(index, 1);
    },
    undoItemEvent() {
      const item = this.undoList.pop();
      this.addItemEvent(item);
    }
  },
  watch: {
    undoList: {
      handler(newValue, oldValue) {
        if (this.undoList.length > 0) {
          setTimeout(() => {
            this.undoList = [];
          }, 3000);
        }
      },
      deep: true,
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