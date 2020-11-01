<template>


<div>
  <NavBar :nav-class="navigationClass()" :theme-logo="themeLogo()" :nav-Links="navLinks"/>
</div>
  <router-view />
</template>
<script>
import NavBar from "@/components/navigationBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/",
        icon: "ion-ios-business"
      },
      {
        text: "About",
        path: "/contact",
        icon: "ion-ios-megaphone"
      }
    ]
  }),
  components: {
    NavBar
  },
  methods: {
    ...mapActions(["updateDarkMode","updateDisplay"]),
    navigationClass() {
      const navClass = this.getDisplay()+" "+this.theme;
      console.log(navClass);
      return (navClass|| 'nav');
    },
    themeLogo() {
      return this.darkMode
        ? require("@/assets/images/moon.png")
        : require("@/assets/images/sun.png");
    },
    getDisplay() {
      this.updateDisplay();
      return this.display;
    }
  },
  computed: mapGetters(["darkMode", "theme", "display"]),

  created() {
    window.addEventListener("resize", this.getDisplay);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDisplay);
  }
};
</script>

<style>
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
