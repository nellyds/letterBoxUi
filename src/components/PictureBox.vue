<template>
  <div class="PictureBox">
    <h1 class="text" v-on:click="clickItem($event)">
      {{ firstInitial }}<span>{{ output }}</span>
    </h1>
    <div id="target" class="content">
<img src='https://personacentral.com/wp-content/uploads/2019/04/Persona-5-Smash-Joker-Render-696x696.jpg'/>
    </div>
 <img src='https://personacentral.com/wp-content/uploads/2019/04/Persona-5-Smash-Joker-Render-696x696.jpg'/>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "PictureBox",
  components: {
  },
  props: {
    initContent: String,
    imgUrl: String
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
      }
      if (this.charIndex === len) {
        this.deleteTitle();
      }
    },
    writeTitle: function() {
      var len;
      len = this.fullTitle.length;
      if (this.charIndex < len) {
        this.output = this.output + this.fullTitle[this.charIndex];
        this.charIndex += 1;
        setTimeout(this.writeTitle, 30);
      } else {
        this.expandContent();
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
  },
  data() {
    return {
      content: this.initContent,
      firstInitial: "",
      fullTitle: "",
      output: "",
      charIndex: 0,
      contentHeight: 0
    };
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
}
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: white;
}
</style>
<template>
  <div class="LeftTextBox">
    <h1 class="text" v-on:click="clickItem($event)">
      {{ firstInitial }}<span>{{ output }}</span>
    </h1>
    <div id="target" class="content"><Form></Form></div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "LeftTextBox",
  components: {
  },
  props: {
    initContent: String
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
      }
      if (this.charIndex === len) {
        this.deleteTitle();
      }
    },
    writeTitle: function() {
      var len;
      len = this.fullTitle.length;
      if (this.charIndex < len) {
        this.output = this.output + this.fullTitle[this.charIndex];
        this.charIndex += 1;
        setTimeout(this.writeTitle, 30);
      } else {
        this.expandContent();
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
  },
  data() {
    return {
      content: this.initContent,
      firstInitial: "",
      fullTitle: "",
      output: "",
      charIndex: 0,
      contentHeight: 0
    };
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
}
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: white;
}
</style>
