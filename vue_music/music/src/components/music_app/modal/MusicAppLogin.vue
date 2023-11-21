<template>
  <form v-show="tab === authTabs.Login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
        type="email"
      />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
        type="password"
      />
    </div>
    <button
      class="block w-full bg-sky-700 text-white py-1.5 px-3 rounded transition hover:bg-sky-800"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>
<script>
import authTabs from '@/Utility/AuthEnum'

export default {
  name: 'MusicAppLogin',
  computed: {
    authTabs() {
      return authTabs
    }
  },
  props: {
    tab: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped></style>
