<template>
  <nav :class="['nav', themeClass, displayClass]">
    <ul
      :class="['bar', themeClass, displayClass]"
      :style="{ background: navBackground || '#555' }"
      ref="nav"
      @mouseover="toggleNav(false)"
      @mouseleave="toggleNav(true)"
    >
      <figure
        :class="['Logo', themeClass, displayClass]"
        :style="{ background: navBackground || '#555' }"
        ref="fig"
      >
        <router-link :to="navLinks[0].path">
          <img
            alt="logo"
            :src="logoImg || require('@/assets/images/logo.png')"
            width="40"
          />
        </router-link>
      </figure>
      <li
        :class="[themeClass, displayClass]"
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseover="$event.currentTarget.classList.add('hoverList')"
        @mouseleave="$event.currentTarget.classList.remove('hoverList')"
      >
        <router-link
          :class="[themeClass, displayClass]"
          :to="link.path"
          @mouseover="$event.currentTarget.classList.add('hoverLink')"
          @mouseleave="$event.currentTarget.classList.remove('hoverLink')"
        >
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
      <i :class="['themeLogo', themeClass, displayClass]">
        <img
          alt="Dark Mode"
          :src="themeLogo || require('@/assets/images/moon.png')"
          width="40"
          @click="this.updateDarkMode()"
        />
      </i>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",

  props: [
    "themeClass",
    "displayClass",
    "logoImg",
    "themeLogo",
    "navLinks",
    "navBackground"
  ],
  methods: {
    ...mapActions(["updateDarkMode"]),
    toggleNav(condition) {
      const nav = this.$refs.nav.classList;
      const fig = this.$refs.fig.classList;
      nav.contains("active") && condition
        ? nav.remove("active")
        : nav.add("active");
      fig.contains("active") && condition
        ? fig.remove("active")
        : fig.add("active");
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 60px;
  width: 100%;
  z-index: 1;

  &.desktop {
    position: fixed;
  }
  &.mobile {
    height: 0px;
    position: fixed;
  }
  .bar {
    display: flex;
    height: 100%;
    align-items: flex-end;

    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #ccc;

    &.mobile {
      position: fixed;
      width: 320px;
      flex-direction: column;
      left: -260px;
      transition: 300ms ease all;
      top: 60px;
      box-shadow: 2px 2px 2px #ccc;

      &.active {
        left: 0px;
      }
    }
    .Logo {
      margin: 0;
      margin-top: 1;
      cursor: pointer;
      height: 40px;
      padding: 10px 20px;

      &.mobile {
        width: 20px;
        flex-direction: column;
        left: 0px;
        position: fixed;
        top: 0;
        transition: 299ms ease all;
        box-shadow: 2px 0px 0px #ddd;

        &.active {
          width: 280px;
        }
      }
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      &.light {
        color: #424242;
      }
      &.dark {
        color: #788690;
      }
      &.mobile {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        transition: 300ms ease all;
      }
    }

    li {
      list-style-type: none;
      padding: 10px 20px;
      &.hoverList {
        // background: #42b983;
        a {
          font-weight: bold;
          &.light {
            color: #0d47a1;
          }
          &.dark {
            color: #fff;
          }
        }

        i {
          font-size: 26px;
          font-weight: bolder;
        }
      }

      &.mobile {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        transition: 300ms ease all;
      }
    }

    i {
      margin-right: 10px;
      font-size: 22px;
    }
    .themeLogo {
      margin-left: auto;
      cursor: pointer;
      &.mobile {
        margin-top: auto;
        padding-bottom: 20%;
      }
    }
  }
}
</style>
