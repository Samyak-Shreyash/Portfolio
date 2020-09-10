<template>
    <div>
    <div id="nav" class="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <span>Check</span>
    </div>
    </div>
</template>

<script>

export default {
  name: "AppNavigation",
}
</script>

<style scoped>

.header {
background: blueviolet;
height: 10px;
}

</style>