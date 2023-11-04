<template>
  <div class="listItem-div-flex-main">
    <h3>Todo list</h3>
    <hr>
    <div v-if="shouldDisplayPlaceholder" class=" listItem-div-display">
      Add todo item ...
    </div>
    <div v-else>
      <ul>
        <li v-for="(item,index) in items" :key="index">
          <div class="listItem-div-flex-li">
            => {{ item }}
            <button @click="removeItem(index)">X</button>
          </div>
        </li>
      </ul>
      <undoItem :undoItems="undoItems" @undoItemEvent="undoItem"/>
    </div>
  </div>
</template>
<script>
import undoItem from "@/components/UndoItem.vue";

export default {
  name: "ListItem",
  components: {undoItem},
  props: {
    items: {
      type: Array,
      required: true,
    },
    undoItems: {
      type: Array,
      required: true,
    }
  },
  emits: ["removeItemEvent", "undoItemEvent"],
  methods: {
    removeItem(index) {
      this.$emit("removeItemEvent", index);
    },
    undoItem() {
      this.$emit("undoItemEvent");
    }
  },
  computed: {
    shouldDisplayPlaceholder() {
      return this.items.length === 0 && this.undoItems.length === 0;
    }
  }
}
</script>
<style scoped lang="scss">
.listItem-div-flex-main {
  display: flex;
  flex-direction: column;
  width: 380px;
}

.listItem-div-display {
  padding: 10px;
  font-size: large;
  color: #d3d3d3;
  font-style: italic;
}

.listItem-div-flex-li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

h3 {
  margin: 10px 0 0 0;
}

hr {
  border: dashed 2px #d3d3d3;
  width: 100%;
  margin: 0;
}

ul {
  padding: 0px 10px 10px 0;
  list-style: none;
}

li {
  margin: 5px 5px;
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
}
</style>