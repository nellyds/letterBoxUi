<template>
  <div id="home" class="home" >
  <v-container  id="scroll_target" >
    <div v-scroll="onScroll">
      <!-- <div class="flex-container">
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </div> -->
</div>
          <LeftTextBox v-bind:initContent=content v-bind:id="one" v-bind:image="'https://vanyaland.com/wp-content/uploads/2017/12/MogwaiFeat_CreditScottMurry.jpg'" />  
          <LeftTextBox v-bind:initContent=content2 v-bind:image="'https://musicglue-user-app-p-4-p.s3.amazonaws.com/originals/f56d2a90-19a5-0136-453b-264e8304efb3'" />
          <FormBox v-bind:initContent=content3 v-bind:image="'https://cdntest.bridge909.org/images/appleseed-cast-brad-ftrjpg.jpg'" />
      </v-container>
  </div>

</template>

<script>
import LeftTextBox from "@/components/LeftTextBox.vue";
import FormBox from "@/components/FormBox.vue";
export default {
  name: "Home",
  components: {
    LeftTextBox,
    FormBox
  },
  data: function() {
    return {
      offsetTop: 0,
      content: 'This is the Headline',
      content2: 'Why not more stuff?',
      selectedId: 'one',
      content3: 'This is a form'
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
.centered{
}
h1{
  color: white;
}
</style>
