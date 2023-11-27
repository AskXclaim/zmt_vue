<template>
  <veeForm v-show="tab === authTabs.Login" :validationSchema="loginValidationSchema"
           @submit="login">
    <musicAppAuthAlert :currentProcess="loginProcessStage" :message="loginAlertMsg"
                       :shouldShowAlert="shouldShowLoginAlert" :alertType="alertType"
                       @closeAlertEvent="closeAlertEvent"/>
    <!-- Email -->
    <div class="mb-3">
      <label for="loginEmail" class="inline-block mb-2">Email</label>
      <veeField id="loginEmail" name="loginEmail"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
         transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" type="email"/>
      <errorMessage class="text-red-600 rounded-md" name="loginEmail"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label for="loginPassword" class="inline-block mb-2">Password</label>
      <veeField id="loginPassword" name="loginPassword"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
         transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" type="password"/>
      <errorMessage class="text-red-600 rounded-md" name="loginPassword"/>
    </div>
    <button :disabled="shouldShowLoginAlert"
            class="block w-full bg-sky-700 text-white py-1.5 px-3 rounded transition 
        hover:bg-sky-800 disabled:cursor-not-allowed" type="submit">
      Submit
    </button>
  </veeForm>
</template>
<script>
import authTabs, {alertTypes, authProcessStages, authAlertMsg} from '@/Utility/AuthEnum';
import musicAppAuthAlert from "@/components/music_app/banner/MusicAppAuthAlert.vue";
import {validate} from "vee-validate";

export default {
  name: 'MusicAppLogin',
  components: {musicAppAuthAlert},
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loginValidationSchema: {
        loginEmail: "required|email",
        loginPassword: "required|min:8|max:16"
      },
      shouldShowLoginAlert: false,
      loginAlertMsg: authAlertMsg.Empty,
      loginProcessStage: authProcessStages.NotStarted,
      alertType: alertTypes.LoginAlert
    }
  },
  computed: {
    authTabs() {
      return authTabs
    }
  },
  methods: {
    closeAlertEvent(alertType) {
      if (alertType && alertType === alertTypes.LoginAlert) {
        this.shouldShowLoginAlert = false;
        this.loginAlertMsg = authAlertMsg.Empty;
        this.loginProcessStage = authProcessStages.NotStarted;
      }
    },
    login(values) {
      // validate();
      console.log(values);
      this.loginAlertMsg = authAlertMsg.LoginInProcess;
      this.loginProcessStage = authProcessStages.Processing;
      this.shouldShowLoginAlert = true;

      setTimeout(() => {
        this.loginAlertMsg = authAlertMsg.LoginComplete;
        this.loginProcessStage = authProcessStages.ProcessingCompleted;
        this.shouldShowLoginAlert = true;
      }, 1500);
    }
  }
}
</script>
<style lang="scss" scoped></style>
