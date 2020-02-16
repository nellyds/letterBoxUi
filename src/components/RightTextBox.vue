<template>
  <div class="RightTextBox">
    <h1 v-on:click="clickItem($event)"><span>{{output}}</span>{{lastInitial}}</h1>
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
          console.log(this.charIndex)
        }
        

    },
    deleteTitle:function(){
        var len
        len = this.fullTitle.length
        if (this.charIndex < this.fullTitle.length+1){
            this.output =this.fullTitle.slice(this.charIndex, len)
            this.charIndex += 1
            console.log(this.charIndex)
            setTimeout(this.deleteTitle, 30)
        } else{
            this.charIndex = len -1;
        }
        
        
    }
  },   
  data() {
      return {
          content: this.msg,
          lastInitial: '',
          fullTitle: '',
          output: '',
          showFullTitle: false,
          showEntireSection: false,
          charIndex:0,
      }
  }
}
</script>
<style scoped>
h3 {

}

.class{
  background-color: rgb(28, 28, 28)
}


</style>
