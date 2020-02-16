<template>
  <div class="RightTextBox">
    <h1 v-on:click="clickItem($event)"><span>{{output}}</span>{{lastInitial}}</h1>
    <div id="target" class="content" ><Form></Form></div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "RightTextBox",
  props: {
    msg: String,
  }, 
  mounted() {
      var len = this.content.length;
      var lenMinus = len-1
      this.lastInitial = this.content.slice(lenMinus,len);       
      this.fullTitle = this.content.slice(0,lenMinus);
      this.charIndex = this.fullTitle.length -1
  },
  methods: {
    clickItem: function() {
    var len = this.fullTitle.length;
    if (this.charIndex === len-1){
      this.writeTitle() 
    }   
    if (this.charIndex === -1){
        this.deleteTitle()
    } 
    },
    writeTitle: function(){       
         if  (this.charIndex > -1){
             console.log(this.fullTitle[this.charIndex])
          this.output =  this.fullTitle[this.charIndex] + this.output
          this.charIndex -= 1
          setTimeout(this.writeTitle, 30)
        } else{
            this.expandContent();
        }      
    },
    deleteTitle:function(){
        var len
        var content = document.getElementById("target");
        if (this.contentHeight === content.style.maxHeight){
        content.style.maxHeight = 0;
        this.contentHeight = 0;
        }
        len = this.fullTitle.length
        if (this.charIndex < this.fullTitle.length+1){
            this.output =this.fullTitle.slice(this.charIndex, len)
            this.charIndex += 1
            console.log(this.charIndex)
            setTimeout(this.deleteTitle, 30)
        } else{
            this.charIndex = len -1;
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
          lastInitial: '',
          fullTitle: '',
          output: '',
          contentHeight: 0,
          charIndex:0,
      }
  }
}
</script>
<style scoped>
.RightTextBox{
    border-right: 1px solid white;
}
.text{
  color:white;
  padding: .2em;
  
  
}
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color:white;
  

}

</style>
