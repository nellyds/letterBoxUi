<template>
  <div class="LeftTextBox">
    <v-responsive ratio="16/9">
      <div class="screenContainer">
        <div id="target" class="textContainer" v-bind:style="objectPlacement">
          <p class="text" v-on:click="clickItem($event)">
            <span class="firstLetter">{{ firstInitial }}</span
            ><span>{{ output }}</span>
          </p>
          <transition name="fadein">
            <div
              v-if="showBackGround"
              id="containerTarget"
              class="containerTarget"
            >
              {{ textContent }}
            </div>
          </transition>
        </div>
        <img v-if="blurStart" id="photo" class="startPhoto" :src="image" />
        <transition name="fade">
          <img v-if="show" id="photo" class="photo" :src="image" />
        </transition>
      </div>
    </v-responsive>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "LeftTextBox",
  components: {},
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
      this.blurStart = false;
      var len;
      len = this.fullTitle.length;
    this.$store.commit({
      type: "setRevealed",
      result: true
    });
      if (this.charIndex === 0) {
        this.writeTitle();
        this.show = true;
        this.$store.commit({
        type: "setReveal",
        result: true
    });
        this.showBackGround = true;
      }
      if (this.charIndex === len) {
        this.deleteTitle();
        this.show = false;
        this.$store.commit({
        type: "setReveal",
        result: false
    });
        this.showBackGround = false;
        this.blurStart = true;
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
      if (photo.style.opacity < 1) {
        photo.style.opacity += 0.1;
      }
    }
  },
  data() {
    return {
      content: this.initContent,
      firstInitial: "",
      fullTitle: "",
      output: "",
      charIndex: 0,
      contentHeight: 0,
      showBackGround: false,
      show: false,
      blurStart: true,
      textContent:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      objectPlacement: {
        position: "absolute",
        top: "" + 300 + "px",
        left: "" + 400 + "px"
      }
    };
  },
  computed: {}
};
</script>
<style scoped>
.LeftTextBox {
  border-left: 1px solid white;
}
.text {
  color: white;
  padding: 0.2em;
  font-size: 3.5em;
  font-family: "Archivo Black", sans-serif;
}
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: black;
  background-color: white;
}
.textContainer {
  position: absolute;
  z-index: 10;
  padding: 1em;
  width: 40em;
}
.screenContainer {
  height: 100vh;
  width: 100vw;
  background-color: white;
}
.photo {
  position: absolute;
  height: 99vh;
  width: 99vw;
  opacity: 1;
}
.fade-enter {
  filter: blur(15px);
}
.fade-enter-active {
  transition: filter 1.5s;
}
.fade-enter-to {
  filter: blur(0px);
}

.containerTarget {
  background-color: white;
  padding: 0.5em;
  font-size: 1.5em;

  color: black;
  font-family: "Amatic SC", cursive;
}
.fadein-enter {
  filter: blur(15px);
}
.fadein-enter-active {
  transition: filter 1.5s;
}
.fadein-enter-to {
  filter: blur(0px);
}
.background {
  background-color: white;
}
.startPhoto {
  filter: blur(15px);
  position: absolute;
  height: 99vh;
  width: 99vw;
}
</style>
