<template>
  <a
    :class="{
      'hover:text-white text-white bg-sky-600': tab === tabName,
      'hover:text-sky-600': tab !== tabName
    }"
    class="block rounded py-3 px-4 transition"
    href="#"
    @click.prevent="onClick"
    >{{ tabName }}</a
  >
</template>
<script>
import authTabs from '@/Utility/AuthEnum'

export default {
  computed: {
    authTabs() {
      return authTabs
    }
  },
  props: {
    tab: {
      type: String,
      required: true
    },
    tabName: {
      type: String,
      required: true
    }
  },
  emits: ['onTabClickEvent'],
  methods: {
    onClick() {
      this.$emit('onTabClickEvent', this.tabName)
    }
  }
}
</script>

<style lang="scss" scoped></style>
