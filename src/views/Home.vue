<template>
  <div id="home" class="home">
    <v-container id="scroll_target">
      <div v-scroll="onScroll"></div>
      <LeftTextBox
        v-bind:initContent="content"
        v-bind:id="one"
        v-bind:image="
          'https://vanyaland.com/wp-content/uploads/2017/12/MogwaiFeat_CreditScottMurry.jpg'
        "
      />
    </v-container>
  </div>
</template>

<script>
import LeftTextBox from "@/components/LeftTextBox.vue";
export default {
  name: "Home",
  components: {
    LeftTextBox
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
  background-color: black;
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
