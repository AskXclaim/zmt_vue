<template>
  <!--  Note that if you wanted you can replace the whole-->
  <!--  content of the slotsForm component with a your own content-->
  <!--  just as how the slotsForm component does in itself.-->
  <slotsForm/>
  <!--  shod default view since nothing was passed.-->
  <hr>
  <slotsNamedForm/>
  <hr>
  <slotsNamedForm>
  <template v-slot:named-slot-help>
    {{ helpText}}
  </template>
    <!--    This will override all the content if uncommented-->
    <template v-slot:named-slot-header>
      <h1>I'm the header!</h1>
    </template>
  </slotsNamedForm>
</template>

<script>
import SlotsForm from "@/components/Slots-Form.vue";
import SlotsNamedForm from "@/components/Slots-Named-Form.vue";

export default {
  name: "App",
  components: {
    slotsForm: SlotsForm,
    slotsNamedForm: SlotsNamedForm
  },
  data() {
    return {
      helpText: "I'm a help text"
    }
  }
}
</script>