<template>
  <div id="Contact" class="Contact">
    <v-container id="scroll_target">
      <FadeTextBox
        v-bind:initContent="content"
        v-bind:image="
          'https://diy-magazine.s3.amazonaws.com/d/diy/Artists/A/Appleseed-Cast/_landscape/125778/IMG_0016.jpg'
        "
      />
    </v-container>
  </div>
</template>
<script>
import FadeTextBox from "@/components/FadeTextBox.vue";
export default {
  name: "About",
  components: {
    FadeTextBox
  },
  data: function() {
    return {
      content: "this is a fade"
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
