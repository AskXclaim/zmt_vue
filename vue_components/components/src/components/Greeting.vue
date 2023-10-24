<template>
  <div class="border-dashes-2-px margin-padding-5-px-all">
    <p>{{ message }} {{ getUserName }}!</p>
    <div>
      <label for="userName">User name:</label>
      <input id="userName" type="text" placeholder="Enter user name"
             :value="userName" @change="onUserNameChange">
      <h4 class="margin-5-px-0-px">Please, press enter to effect changes or click out of the input box</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      message: 'Hello, welcome'
    }
  },
  props: ["userName"],
  emits: ["onUserNameChangeEvent"],
  computed: {
    getUserName() {
      return this.userName ? this.userName : "user";
    }
  },
  methods: {
    onUserNameChange(event) {
      this.$emit("onUserNameChangeEvent", event.target.value);
    }
  },
}
</script>

<style scoped lang="scss">
p {
  color: chocolate;

  &:hover {
    color: darken(chocolate, 15%);
  }
}

.margin-5-px-0-px {
  margin: 5px 5px 5px 0;
}
.border-dashes-2-px{
  border: darkseagreen 2px dashed;
}
.margin-padding-5-px-all{
  margin: 5px;
  padding: 5px;
}
</style>
