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
  // One way of using props is the array method,
  // the other is the object method. 
  // props: ["userName"],
  props: {
    userName: {
      // you can use an array for more than one data type in the type section.
      type: String,
      required: true,
      default: "user", // if you use default required isn't need as if not provided the default is used.
      // validator(value) {
      //   const regex = /^[^a-zA-Z0-9]+$/; // Match where the string has only characters, 
      //   // that are not in the class defined here as a-z, A-Z or 0-9.
      //   if (value) {
      //     console.log(`I am in validator. Value is '${value}'`);
      //     return value?.trim().length === 0 || (isNaN(value) && !value?.trim().match(regex));
      //   }
      //
      //   return false;
      //   //NB you cant access to any properties e.g. data(), methods etc. in a prop validator
      // }
    }
  },
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

.border-dashes-2-px {
  border: darkseagreen 2px dashed;
}

.margin-padding-5-px-all {
  margin: 5px;
  padding: 5px;
}
</style>
