<template>
  <div class="FormBox">
    <v-responsive ratio="16/9">
  <div class="screenContainer">
    <transition name="fade">
    <img v-if="show"  id="photo" class="photo" :src="image">
    </transition>
    <div id="target" class="textContainer" v-bind:style="objectPlacement">
    <p class="text" v-on:click="clickItem($event)">
      <span class="firstInitial" >{{ firstInitial }}</span> <span>{{ output }}</span>
    </p>
    <transition name="fadein">
    <div v-if="showBackGround" id="containerTarget" class="containerTarget">
      <Form />
    </div>
    </transition>
  </div>
  </div>
    </v-responsive>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import Form from "@/components/Form.vue";
export default {
  name: "FormBox",
  components: {
      Form
  },
  props: {
    initContent: String,
    image: {
      type: String
    }
  },
  mounted() {
    this.firstInitial = this.content.slice(0, 1);
    var len = this.content.length;
    this.fullTitle = this.content.slice(1, len);
  },
  methods: {
    clickItem: function() {
      var len;
      len = this.fullTitle.length;
      if (this.charIndex === 0) {
        this.writeTitle();
        this.show = true;
        this.showBackGround = true;
      }
      if (this.charIndex === len) {
        this.deleteTitle();
        this.show = false;
        this.showBackGround = false;
      }
    },
    writeTitle: function() {
      var len;
      len = this.fullTitle.length;
      if (this.charIndex < len) {
        this.output = this.output + this.fullTitle[this.charIndex];
        this.charIndex += 1;
        setTimeout(this.writeTitle, 60);
      } else {
        this.expandContent();
        document.getElementById("textTarget").classList.add("background");
      }
    },
    deleteTitle: function() {
      var content = document.getElementById("target");
      if (this.contentHeight === content.style.maxHeight) {
        content.style.maxHeight = 0;
        this.contentHeight = 0;
      }
      if (this.charIndex > -1) {
        this.output = this.output.slice(0, this.charIndex);
        this.charIndex -= 1;
        setTimeout(this.deleteTitle, 10);
      } else {
        this.charIndex = 0;
      }
    },
    expandContent: function() {
      var content = document.getElementById("target");
      if (this.contentHeight < document.getElementById("target").scrollHeight) {
        content.style.maxHeight = content.scrollHeight + "px";
        this.contentHeight = content.style.maxHeight;
      }
    },

    fadeIn: function() {
      var photo = document.getElementById("photo");
      if  (photo.style.opacity < 1){
           photo.style.opacity += .1;
     }  
    },
  },
  data() {
    return {
      content: this.initContent,
      firstInitial: "",
      fullTitle: "",
      output: "",
      charIndex: 0,
      contentHeight: 0,
      showBackGround:false,
      show : false,
      objectPlacement: {
        position: 'absolute',
        top: '400px',
        left: '500px'
      }
    };
  },
  computed: {

  }
};
</script>
<style scoped>
.LeftTextBox {
  border-left: 1px solid white;
}
.text {
  color: white;
  padding: 0.2em;
  font-size:2em;
    font-family: 'Amatic SC', cursive;
}
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: white;
  background-color: black;

}
.textContainer{
    position: absolute;
  z-index: 10;
  padding: 1em;
  width: 40em;
}
.screenContainer {
  height: 100vh;
  width: 100vw;
  background-color: black;
}
.photo{
  position: absolute;
  height: 99vh;
  width: 99vw;
  opacity: 1;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3.5s;
}
.fade-enter-to {
  opacity: 1;
}

.containerTarget{
  background-color:black;
  padding: 2em;
  font-size: 1em;
  color:white;
}
.fadein-enter {
  opacity: 0;
}
.fadein-enter-active {
  transition: opacity 1.6s;
}
.fadein-enter-to {
  opacity: 1;
}
.background{
  background-color: black;
}
.firstInitial{
  font-size: 4em;
    font-family: 'Amatic SC', cursive;
}
</style>
