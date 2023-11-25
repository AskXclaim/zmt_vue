<template>
  <div v-show="shouldShowRegistrationAlert"
       class="grid grid-cols-2 place-content-between my-1 border-2 
       rounded-md p-1.5 font-bold text-center" :class="getBgColor">
    <div class="div-width justify-self-start text-gray-600">{{ message }}</div>
    <div v-show="currentProcess===registrationStages.ProcessingCompleted"
         class="justify-self-end px-1 cursor-pointer" @click.prevent="closeAlert">
      <i class="fas fa-times"></i></div>
  </div>
</template>
<script>
import {alertTypes, registrationStages} from "@/Utility/AuthEnum"

export default {
  name: "MusicAppAlert",
  computed: {
    registrationStages() {
      return registrationStages
    },

    getBgColor() {
      if (this.currentProcess === registrationStages.Processing)
        return "bg-blue-200";
      if (this.currentProcess === registrationStages.ProcessingCompleted)
        return "bg-green-200";
    }
  },
  props: {
    shouldShowRegistrationAlert: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true
    },
    currentProcess: {
      type: String,
      required: true
    }
  },

  methods: {
    closeAlert() {
      this.$emit("closeAlertEvent", alertTypes.RegistrationAlert)
    }
  }
}
</script>
<style scoped lang="scss">
.div-width {
  width: max-content;
}
</style>