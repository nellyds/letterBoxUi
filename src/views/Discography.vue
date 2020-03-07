<template>
  <div id="home" class="home">
    <v-container id="scroll_target">
      <div v-scroll="onScroll"></div>
      <PictureBox
        v-bind:initContent="content"
        v-bind:image="
          'https://www.yardhawk.net/everybodytalking/wp-content/uploads/2019/05/cursive-1.jpg'
        "
      />
    </v-container>
  </div>
</template>

<script>
import PictureBox from "@/components/PictureBox.vue";
export default {
  name: "Discography",
  components: {
    PictureBox
  },
  data: function() {
    return {
      content: "This is the Headline"
    };
  },
  methods: {
    onScroll() {
      this.offsetTop += 1;
    }
  }
};
</script>
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  color: white;
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
  background-color: black;
}
.centered {
}
h1 {
  color: white;
}
</style>
