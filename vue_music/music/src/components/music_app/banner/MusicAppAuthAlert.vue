<template>
  <div v-show="shouldShowAlert"
       class="grid grid-cols-2 place-content-between my-1 border-2 
       rounded-md p-1.5 font-bold text-center" :class="getBgColor">
    <div class="div-width justify-self-start text-gray-600">{{ message }}</div>
    <div v-show="currentProcess===processStage.ProcessingCompleted"
         class="justify-self-end px-1 cursor-pointer" @click.prevent="closeAlert">
      <i class="fas fa-times"></i></div>
  </div>
</template>
<script>
import { authProcessStages} from "@/Utility/AuthEnum"

export default {
  name: "MusicAppAuthAlert",
  computed: {
    processStage() {
      return authProcessStages
    },

    getBgColor() {
      if (this.currentProcess === authProcessStages.Processing)
        return "bg-blue-200";
      if (this.currentProcess === authProcessStages.ProcessingCompleted)
        return "bg-green-200";
    }
  },
  props: {
    alertType: {
      type: String,
      required: true
    },
    shouldShowAlert: {
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
  updated() {
    if (this.currentProcess === authProcessStages.ProcessingCompleted) {
      setTimeout(() => {
        this.closeAlert();
      }, 1500);
    }
  },
  unmounted() {
    this.closeAlert();
  },
  methods: {
    closeAlert() {
      this.$emit("closeAlertEvent", this.alertType)
    }
  }
}
</script>
<style scoped lang="scss">
.div-width {
  width: max-content;
}
</style>