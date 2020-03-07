<template>
  <div id="Contact" class="Contact">
    <v-container id="scroll_target">
      <FormBox
        v-bind:initContent="content"
        v-bind:image="
          'https://cdntest.bridge909.org/images/appleseed-cast-brad-ftrjpg.jpg'
        "
      />
      <FadeTextBox
        v-bind:initContent="content"
        v-bind:image="
          'https://cdntest.bridge909.org/images/appleseed-cast-brad-ftrjpg.jpg'
        "
      />
    </v-container>
  </div>
</template>
<script>
import FormBox from "@/components/FormBox.vue";
import FadeTextBox from "@/components/FadeTextBox.vue";
export default {
  name: "Contact",
  components: {
    FormBox,
    FadeTextBox
  },
  data: function() {
    return {
      content: "this is a form"
    };
  },
  methods: {}
};
</script>
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
body {
  width: 100%;
  height: 100%;
}
.divider {
  border-right: 1px solid;
}
.screen_container {
  height: 100vh;
}
.centered {
}
h1 {
  color: white;
}
</style>
