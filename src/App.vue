<template>
  <v-app>
        <v-navigation-drawer
        class="black"
          v-model="drawer"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :color="blue"
          absolute
        >
        <v-card>
        <p class="navContent"> Who are you?</p>
        </v-card>
        </v-navigation-drawer>
    
    <transition >
        <router-view></router-view>
    </transition>

  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },

  data(){
    return{
      black: 'black'
    }
  }

  
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
body{
  width:2000px;
  height: 100%;
  background-color: black;
  font-family: 'Amatic SC', cursive;
}
.navContent{
  transform: rotate(90deg);
  color: white;
  font-family: 'Amatic SC', cursive;

}
</style>
