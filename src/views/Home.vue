<template>
  <div class="home">
    <div class="flex-container">
    <LeftTextBox msg="this is also me"></LeftTextBox>


    </div>
        <RightTextBox msg="this is me"></RightTextBox>
    </div>
</template>

<script>
// @ is an alias to /src
import LeftTextBox from "@/components/LeftTextBox.vue";
import RightTextBox from "@/components/RightTextBox.vue";


export default {
  name: "Home",
  components: {
    LeftTextBox,
    RightTextBox
  }
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


</style>