<template>
  <main class="timeline__view" :class="[themeClass, displayClass]">
    <h3 :class="{ title__gap: title.gap }">{{ title.data }}</h3>
    <section class="timeline" :class="[themeClass, displayClass]">
      <ul>
        <li
          v-for="(info, index) in timelineData"
          v-bind:key="index"
          :class="[
            { year__gap: info.start && info.end },
            themeClass,
            displayClass
          ]"
        >
          <span></span>
          <div :class="[themeClass, displayClass]">{{ info.title }}</div>
          <div :class="[themeClass, displayClass]">{{ info.subtitle }}</div>
          <div :class="[themeClass, displayClass]">{{ info.location }}</div>
          <div class="year" :class="[themeClass, displayClass]">
            <span :class="[themeClass, displayClass]">{{ info.yearEnd }}</span>
            <span v-show="info.start" :class="[themeClass, displayClass]">{{
              info.yearStart
            }}</span>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "TimeLine",
  props: ["title", "timelineData", "themeClass", "displayClass"]
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
$font-stack: "Montserrat", sans-serif;
$dark-header-color: #ddd;
$dark-font-color: #788690;
$light-font-color: #000;
$light-bg: #cfdcec;
$dark-bg: #000;
$light-blue: #4e9bfa;
@mixin clearfix {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
}
@mixin set-dark-border($thickness, $color, $radius) {
  border: $thickness solid $dark-font-color;
  border-radius: $radius;
}
@mixin set-light-border($thickness, $color, $radius) {
  border: $thickness solid $light-font-color;
  border-radius: $radius;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-stack;
}
*.dark,
*.dark::before,
*.dark::after {
  color: $dark-header-color;
}
.title__gap {
  height: 80px;
}

.timeline__view {
  width: 80%;
  height: 100%;
  margin: 1em auto;
  padding: 40px;
  background: $light-bg;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  &.dark {
    background: $dark-bg;
  }
}
.timeline {
  padding: 5px 45px;
  ul {
    position: relative;
    &::before {
      @include clearfix();
      height: 100%;
    }
  }
  li {
    position: relative;
    margin: 10px 35px 18px 35px;
    width: 100%;
    list-style: none;
    line-height: 25px;
    &.year__gap {
      margin: 60px 35px;
    }
    & > span {
      @include clearfix();
      left: -25px;
      height: 110%;
      @include set-light-border(2px, $light-font-color, none);
    }
    &.dark > span {
      @include set-dark-border(2px, $light-font-color, none);
    }
    & > span::before,
    & > span::after {
      @include clearfix();
      width: 14px;
      height: 14px;
      @include set-light-border(3px, $light-font-color, 50%);
      left: -7px;
      background: $light-blue;
    }
    & > span::before {
      top: -15px;
    }
    & > span::after {
      top: 100%;
    }
    div {
      &:nth-child(2) {
        font-size: 1.3em;
        font-weight: bold;
      }

      &:nth-child(3),
      &:nth-child(4) {
        font-size: 1.2em;
        color: darken($light-font-color, 25%);
      }

      &.dark:nth-child(3),
      &.dark:nth-child(4) {
        color: $dark-font-color;
      }
      &:nth-child(4) {
        font-style: italic;
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -120px;
      width: 80px;
      text-align: right;
      &:first-child {
        top: -20px;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
}
</style>
