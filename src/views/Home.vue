<template>
  <div id="home" class="home" >
    <p>off: {{offsetTop}}</p>
  <v-container  id="scroll_target" >
    <div v-scroll="onScroll">
      <!-- <div class="flex-container">
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </div> -->
</div>
          <LeftTextBox v-bind:initContent=content v-bind:id="one" v-bind:image="'https://i.imgur.com/M2Q4rh9.jpg'" />  
    initContent: String,
    photoUrl: String

      </v-container>
  </div>

</template>

<script>
import LeftTextBox from "@/components/LeftTextBox.vue";
// import RightTextBox from "@/components/RightTextBox.vue"
// import PictureBox from "@/components/PictureBox.vue"
export default {
  name: "Home",
  components: {
    LeftTextBox
    //RightTextBox,
    //PictureBox
  },
  data: function() {
    return {
      offsetTop: 0,
      content: 'this is content',
        // {'c':'this is also content', 'id':'two'},
        // {'c':'this is the last one', 'id':'three'}

      selectedId: 'one'
    };
  },
  methods: {
    onScroll () {
      this.offsetTop += 1;
    },
  },
  computed: {
    currentTabComponent: function(){
      if (this.offsetTop > 5){
        return LeftTextBox
      }
      else return LeftTextBox   
    }
  },
  watch: {
    offsetTop: function(){
    if (this.offsetTop > 20){
       return this.content = 'Hopefully this works.'
    } else { 
      return this.content = 'What am I doing with my life?'
    }
  }
}}
</script>
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  color:white;
}
body{
  background-color: black;
}
.divider {
  border-right: 1px solid;
}
.screen_container {
  height: 100vh;
  background-color: black;
}
.centered{
}
h1{
  color: white;
}
</style>
