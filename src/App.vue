<template>
  <main>
    <NavBar
      :theme-class="getTheme()"
      :display-class="getDisplay()"
      :logo-img="logoImg()"
      :theme-logo="themeLogo()"
      :nav-Links="navLinks"
      :nav-background="navBackground()"
    />
    <div :class="['pages', getTheme(), getDisplay()]">
      <router-view :display-class="getDisplay()" :theme-class="getTheme()" />
    </div>
  </main>
</template>
<script>
import NavBar from "@/components/navigationBar";
import { mapGetters, mapActions } from "vuex";
// import routes from "@/router";
export default {
  name: "App",
  data: () => ({
    navLinks: [
      {
        text: "Intro",
        path: "/",
        icon: "ion-ios-person"
      },
      {
        text: "Portfolio",
        path: "/portfolio",
        icon: "ion-ios-podium"
      },
      {
        text: "Projects",
        path: "/projects",
        icon: "ion-ios-code-working"
      },
      {
        text: "Blogs",
        path: "/blogs",
        icon: "ion-ios-paper"
      },
      {
        text: "Contact",
        path: "/contact",
        icon: "ion-ios-chatbubbles"
      }
    ]
  }),
  components: {
    NavBar
  },
  methods: {
    ...mapActions(["updateDarkMode", "updateDisplay"]),
    getTheme() {
      return this.theme || "light";
    },
    logoImg() {
      return require("@/assets/images/logo.png");
    },
    navBackground() {
      return this.theme == "dark" ? "#000" : "#fff";
    },

    themeLogo() {
      return this.darkMode
        ? require("@/assets/images/sun.png")
        : require("@/assets/images/moon.png");
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
</style>
<style lang="scss">
body {
  margin: 0;
}
.pages {
  &.dark {
    background: rgba(58, 56, 56, 0.938);
  }
  &.desktop {
    padding-top: 59px;
  }
  &.mobile {
    padding-left: 60px;
  }
}
</style>
