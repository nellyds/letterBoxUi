<template>
  <div class="VerticalTextBox">
      <div class="container">
    <h1 class="text" v-on:click="clickItem($event)">{{firstInitial}}<span >{{output}}</span></h1>
    <div id="target" class="content scale-in-hor-left " ><Form></Form></div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import { setTimeout } from 'timers';
export default {
  name: "VerticalTextBox",
   components: {
    Form
  }
  ,
  
  props: {
    msg: String,
  }, 
  mounted() {
      this.firstInitial = this.content.slice(0,1);
        var len = this.content.length;
      this.fullTitle = this.content.slice(1,len);
  },
  methods: {
    clickItem: function() {
      var len;
      len = this.fullTitle.length;
    if (this.charIndex === 0){
      this.writeTitle()
      }
    if (this.charIndex === len){
      this.deleteTitle()
    }
    },
    writeTitle: function(){
          var len;
          len = this.fullTitle.length;
          if (this.charIndex < len){
            this.output = this.output + this.fullTitle[this.charIndex];
            this.charIndex += 1;
            console.log(this.charIndex, len)
            setTimeout(this.writeTitle, 30);
          } else {
          this.expandContent();
          }
    },
    deleteTitle: function(){
      var content = document.getElementById("target");
      if (this.contentHeight === content.style.maxHeight){
        content.style.maxHeight = 0;
        this.contentHeight = 0;
      }
      if (this.charIndex > -1){
        this.output = this.output.slice(0, this.charIndex);
        this.charIndex -= 1;
        setTimeout(this.deleteTitle, 10);
      } else {
        this.charIndex = 0;
      }
    },
    expandContent: function(){
      var content = document.getElementById("target");
      if (this.contentHeight < document.getElementById("target").scrollHeight){
        content.style.maxHeight = content.scrollHeight + "px";
        this.contentHeight = content.style.maxHeight;
      }
    }
  },    
  data() {
      return {
          content: this.msg,
          firstInitial: '',
          fullTitle: '',
          output: '',
          charIndex: 0,
          contentHeight: 0
      }
  }
}

</script>
<style scoped>
.container{
      display:flex;
  justify-content: center;
}
.VerticalTextBox{
  border-left: 1px solid white;
  
}
.text{
    
  color:white;
  padding: .2em;
transform: rotate(-90deg);
position: relative;
  
  
}
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color:white;
  

}
</style>
