<template>
  <div id="nav" :class="['nav',navClass]">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  {{navigationClass}}
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["navClass","themeLogo", "navLinks"]
};
</script>

<style lang="scss" scoped></style>
