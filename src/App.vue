<template>
  <v-app>

    <div v-if="isLandscape">
      <v-navigation-drawer
        class="black menu"
        v-model="drawer"
        :color="white"
        absolute
      >
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content class="items nav">
              <router-link style="color:white;" v-bind:to="item.url">{{
                item.title
              }}</router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
     <div v-if="revealed" >
      <audio autoplay loop controls>
     <source src="@/assets/intro2.mp3" type="audio/mpeg" />
     </audio>
     </div>
     <div v-else >
    <audio autoplay loop >
     <source src="@/assets/intro.mp3" type="audio/mpeg" />
     </audio>
     </div>
 
    <transition>
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import {Howl} from 'howler';
export default {
  name: "App",

  components: {},

  data() {
    return {
      black: "black",
      items: [
        { title: "Home", url: "/", icon: "dashboard" },
        { title: "Albums", url: "discography", icon: "dashboard" },
        { title: "Contact", url: "contact" },
        { title: "About", url: "about"}
      ],
      screenSize: 0,
      isLandscape: null,
      revealed: this.$store.revealed
    };
  },
  created() {
    if (window.innerWidth > window.innerHeight) {
      this.isLandscape = true;
    }
    if (window.innerHeight > window.innerWidth) {
      this.isLandscape = false;
    }
    this.$store.commit({
      type: "setLandscape",
      result: this.isLandscape
    });
    var sound = new Howl({
    src: ['@/assets/intro.mp3'],
    loop: true,
    volume: 0.05});
    var sound2 = new Howl({
    src: ['@/assets/intro2.mp3'],
    loop: true,
    volume: .2});
    if (this.$store.state.revealed === false){
      sound.play()
    } else sound2.play()
  }
  
};


</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Amatic+SC|Archivo+Black|Cousine|IBM+Plex+Mono|Rubik+Mono+One|Special+Elite&display=swap");
body {
  width: 100%;
  height: 100%;
  background-color: black;
  font-family: "Archivo Black", sans-serif;
}
.items {
  transform: rotate(90deg);
  padding-top: 2em;
  padding-bottom: 2em;
  height: 10em;

  color: white;
  font-family: "Archivo Black", sans-serif;
}
.item {
  border: solid 2px white;
  color: white;
  background-color: black;
  text-decoration-color: white;
  font-family: "Archivo Black", sans-serif;
  color: white;
  text-decoration: none;
}

.menu {
  padding-top: 8em;
  position: fixed;
}
a {
  text-decoration-color: white;
  font-family: "hyper";
  color: white;
  text-decoration: none;
  max-height: 25vh;
}
.nav {
  color: white;
  background-color: black;
  text-decoration-color: white;
  font-family: "hyper";
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
  text-decoration-color: white;
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: white;
}
audio{
  display: none;
  opacity: 0;
}
</style>
