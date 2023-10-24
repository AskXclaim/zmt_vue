<template>
  <greeting :userName="userName" @onUserNameChangeEvent="onUserNameChangeEvent($event)"/>
  <user @onBirthDateChangeEvent="onBirthDateChangeEvent($event)"/>
  <template v-if="age>10">
    <div class="border-dashes-2-px margin-padding-5-px-all">A ha! you {{ getUserName }}, are older than 10</div>
  </template>
</template>
<script>
import Greeting from '@/components/Greeting.vue'
import dobToAge from "dob-to-age";
import User from "@/components/User.vue";

export default {
  name: 'App',
  components: {user: User, greeting: Greeting},
  data() {
    return {
      userName: "",
      age: ""
    }
  },
  computed: {
    getUserName() {
      return this.userName?.trim() ? this.userName : "user"
    }
  },
  methods: {
    onUserNameChangeEvent(value) {
      this.userName = value;
    },
    onBirthDateChangeEvent(value) {
      const dateValue = new Date(value);

      if (dateValue && dateValue >= 0)
        this.age = dobToAge(value);
    }
  }
}
</script>

<style lang="scss" scoped>
.border-dashes-2-px {
  border: dashed darkseagreen 2px;
}

.margin-padding-5-px-all {
  margin: 5px;
  padding: 5px;
}
</style>
