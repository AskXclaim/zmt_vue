<template>
  <veeForm v-show="tab === authTabs.Register" autocomplete="on"
           :validationSchema="validationSchema" @submit="register">
    <musicAppAlert :shouldShowRegistrationAlert="shouldShowRegistrationAlert" :message="registrationAlertMessage"
                   :currentProcess="registrationStage" @closeAlertEvent="closeAlertEvent"/>
    <!-- Name -->
    <div class="mb-3">
      <label for="name" class="inline-block mb-2">Name</label>
      <veeField name="name" id="name" placeholder="Enter Name" type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                 transition duration-500 focus:outline-none focus:border-black rounded"/>
      <!--      <veeField name="name"-->
      <!--                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"-->
      <!--                placeholder="Enter Name"-->
      <!--                type="text" :rules="{required: true, min:3}"-->
      <!--      />-->
      <!--      <veeField name="name"-->
      <!--                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"-->
      <!--                placeholder="Enter Name"-->
      <!--                type="text" :rules="'required'"-->
      <!--      />-->
      <errorMessage name="name" class="text-red-600"/>
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="inline-block mb-2">Email</label>
      <veeField name="email" id="email" placeholder="Enter Email" type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                 transition duration-500 focus:outline-none focus:border-black rounded"/>
      <ErrorMessage name="email" class="text-red-600"/>
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label for="age" class="inline-block mb-2">Age</label>
      <veeField name="age" id="age" type="number"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                 transition duration-500 focus:outline-none focus:border-black rounded"/>
      <ErrorMessage name="age" class="text-red-600"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label for="password" class="inline-block mb-2">Password</label>
      <veeField name="password" id="password" placeholder="Password" type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                 transition duration-500 focus:outline-none focus:border-black rounded"/>
      <ErrorMessage name="password" class="text-red-600"/>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label for="confirmPassword" class="inline-block mb-2">Confirm Password</label>
      <veeField name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
           transition duration-500 focus:outline-none focus:border-black rounded"/>
      <ErrorMessage name="confirmPassword" class="text-red-600"/>
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label for="country" class="inline-block mb-2">Country</label>
      <veeField as="select" name="country" id="country"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
           transition duration-500 focus:outline-none focus:border-black rounded">
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Ussr">Ussr</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antarctica</option>
      </veeField>
      <ErrorMessage name="country" class="text-red-600"/>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <veeField name="tos" id="tos" class="w-4 h-4 float-left -ml-6 mt-1 rounded"
                type="checkbox" value="1"/>
      <label class="inline-block">Accept terms of service</label>
      <ErrorMessage name="tos" class="text-red-600 block"/>
    </div>
    <button :disabled="shouldShowRegistrationAlert"
            class="block w-full bg-sky-700 text-white py-1.5 px-3 rounded transition
             hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-sky-700" type="submit">
      Submit
    </button>
  </veeForm>
</template>
<script>
import authTabs, {alertTypes, registrationAlertMsg, registrationStages} from '@/Utility/AuthEnum';
import musicAppAlert from "@/components/music_app/banner/MusicAppAlert.vue";

export default {
  name: 'MusicAppRegister',
  components: {musicAppAlert},
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      validationSchema: {
        name: "required|min:3|max:25|alphaSpaces",
        email: "required|min:3|max:100|email",
        age: "required|minValue:18|maxValue:120",
        password: "required|min:8|max:16",
        confirmPassword: "required|confirmed:@password",
        country: "required|excluded:Antarctica,Ussr",
        tos: "required"
      },
      shouldShowRegistrationAlert: false,
      registrationAlertMessage: registrationAlertMsg.BeingProcessed,
      registrationStage: registrationStages.NotStarted
    }
  },
  computed: {
    authTabs() {
      return authTabs
    }
  },
  methods: {
    register(values) {
      console.log(values);
      this.registrationAlertMessage = registrationAlertMsg.BeingProcessed;
      this.registrationStage = registrationStages.Processing;
      this.shouldShowRegistrationAlert = true;
    },
    closeAlertEvent(alertType) {
      if (alertType && alertType === alertTypes.RegistrationAlert) {
        this.shouldShowRegistrationAlert = false;
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
