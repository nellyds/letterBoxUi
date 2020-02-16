<template>
  <div id="home" class="home" >
    <div class="dashboard">scrollTop:{{position.scrollTop}}</div>
    <div class="screen_container" >
    <div class="flex-container">
    <LeftTextBox msg="This is also me"></LeftTextBox>
    </div>
    </div>
    <div class="screen_container">
        <div class="flex-container">
    <p> something else</p>
    {{position.scrollTop}}
    </div>
    </div>
    <div class="screen_container">
        <div class="flex-container">
       <p> and something else</p>
    </div>
    </div>
            <!-- <div class="flex-container">
<VerticalTextBox msg="Why the hell not?"></VerticalTextBox> -->
    </div>
    
</template>

<script>
import LeftTextBox from "@/components/LeftTextBox.vue";
export default {
  name: "Home",
  components: {
    LeftTextBox,
  },
  data: function(){
    return {
      position: {scrollTop: 0, scrollLeft: 0}
    }
  },

};
</script>
<style scoped>

.flex-container{
  display:flex;
  justify-content: center;
}
.divider{
  border-right: 1px solid;

}
.screen_container{
  height:100vh;
  background-color:black; 
}


</style>