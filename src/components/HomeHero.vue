<template>
  <div :class="['summ', themeClass, displayClass]">
    <div :class="['card', 'home', themeClass, displayClass]">
      Hello, I am Samyak Shreyash.
      <p :class="['newline', displayClass]"></p>
      I am an {{ designation }} with {{ company }}.
      <p :class="['newline', displayClass]"></p>
      I am from {{ homeLocation }} and currently based out of {{ location }}.
      <p :class="['newline', displayClass]"></p>
      I am a Computer Science Engineer form Sathyabama Institute of Science &
      Technology, Chennai.
    </div>
    <div :class="['card', 'interests', themeClass, displayClass]">
      I have quite varied interests. I love to code for various personal and
      freelancing projects. In my free-time, I like to read novels and sacred
      texts. On many a weekends, I do love to cook different dishes and posing
      with them as my creations.
    </div>
    <div :class="['card', 'skills', themeClass, displayClass]">
      I am currently involved in development with Node.js. I also work on
      Flutter Application development from time to time for interest based
      projects. I tend to fall for python for automation projects and my new
      interests in Machine Learning.
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHero",
  data: () => ({
    designation: "Application Programmer",
    company: "Wells Fargo",
    location: "Bengaluru, Karnataka",
    homeLocation: "Deoghar"
  }),
  props: ["themeClass", "displayClass"]
};
</script>

<style lang="scss" scoped>
.summ {
  &.dark {
    background: rgba(58, 56, 56, 0.938);
    color: #eee;
  }
}
.card {
  border: solid #ddd;
  margin: 2% 2% 0% 2%;
  padding: 1%;
  box-shadow: 2px 2px 2px 2px #ddd;
  text-align: center;
  font-size: 20px;
  &.mobile {
    font-size: 17px;
  }
  &.dark {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 2px 2px 2px 2px #ddd;
    }

    background: #333;

    color: #eee;
  }

  &:hover {
    box-shadow: 2px 2px 2px 2px #555;
  }

  /* Add some padding inside the container */
  .container {
    padding: 2px 16px;
  }

  .newline.desktop {
    display: none;
  }
}
p.bottom.dark {
  background: rgba(58, 56, 56, 0.938);
}
</style>
