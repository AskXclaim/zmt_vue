<template>
  <!-- Auth Modal -->
  <div id="modal" :class="shouldBeHidden" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click="modalVisibility = false">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <authModalAuthTab
                :tab="tab"
                :tabName="authTabs.Login"
                @onTabClickEvent="onTabClickEvent"
              />
            </li>
            <li class="flex-auto text-center">
              <authModalAuthTab
                :tab="tab"
                :tabName="authTabs.Register"
                @onTabClickEvent="onTabClickEvent"
              />
            </li>
          </ul>

          <!-- Login Form -->
          <template v-if="tab === authTabs.Login">
            <musicAppLogin :tab="tab" />
          </template>
          <!-- Registration Form -->
          <template v-if="tab === authTabs.Register">
            <musicAppRegister :tab="tab" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useModalStore from '@/stores/modalStore'
import { mapState, mapWritableState } from 'pinia'
import authTabs from '@/Utility/AuthEnum'
import musicAppLogin from '@/components/music_app/modal/MusicAppLogin.vue'
import musicAppRegister from '@/components/music_app/modal/MusicAppRegister.vue'
import authModalAuthTab from '@/components/music_app/modal/AuthModalAuthTab.vue'

export default {
  name: 'MusicAppRegisterLoginModal',
  components: { authModalAuthTab, musicAppRegister, musicAppLogin },
  data() {
    return {
      tab: authTabs.Login
    }
  },
  computed: {
    authTabs() {
      return authTabs
    },
    ...mapState(useModalStore, ['shouldBeHidden']),
    ...mapWritableState(useModalStore, {
      modalVisibility: 'isOpen'
    })
  },
  methods: {
    onTabClickEvent(tab) {
      if (tab && (tab === authTabs.Login || tab === authTabs.Register)) this.tab = tab
      else this.tab = authTabs.Login
    }
  }
}
</script>
