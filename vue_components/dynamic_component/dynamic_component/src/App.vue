<template>
  <header>
    <dynamicComponentMenu @onSelectChangeEvent="onSelectChangeEvent($event)"/>
  </header>

  <main>
    <div>
      <component :is="componentName"/>
    </div>
  </main>
</template>

<script>
import dynamicComponentHome from "./components/DynamicComponentHome.vue"
import dynamicComponentAbout from "./components/DynamicComponentAbout.vue"
import dynamicComponentMenu from "./components/DynamicComponentMenu.vue";

export default {
  name: "App",
  components: {dynamicComponentMenu, dynamicComponentHome, dynamicComponentAbout},
  data() {
    return {
      componentName: "dynamicComponentHome"
    }
  },
  methods: {
    onSelectChangeEvent(value) {
      if (value)
        this.componentName = this.makeFirstLetterLowerCase(value);
    },
    makeFirstLetterLowerCase(value) {
      if (value)
        return `${value[0].toLowerCase()}${value.slice(1)}`;

      return "dynamicComponentHome";
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
