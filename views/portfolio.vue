<template>
<main id="app">
  <h3>Education</h3>
  <section class="timeline">
    <ul>
      <li v-for="(info, index) in timeline_data" v-bind:key="index" :class="{ year__gap: info.start && info.end }">
        <span></span>
        <div>{{ info.title }}</div>
        <div>{{ info.location }}</div>
        <div>{{ info.subtitle }}</div>
        <div class="year">
          <span>{{ info.yearEnd }}</span>
          <span v-show="info.start" >{{ info.yearStart }}</span>
        </div>
      </li>
    </ul>
  </section>
</main>
</template>

<script>
export default {
   data: () => {
    return {
      timeline_data: [
        {
          "title":"Sathyabama Institute of Science & Technology",
          "location":"Chennai, Tamil Nadu",
          "subtitle":"BE in Computer Science",
          "yearStart":"2014",
          "yearEnd":"2018",
          "end":true,
          "start": true
        },
        {
          "title":"Jawahar Vidya Mandir, Shyamali",
          "location":"Ranchi, Jharkhand",
          "subtitle":"Intermediate",
          "yearStart":"2014",
          "yearEnd":"2013",
          "end":true
        },
        {
          "title":"St. Francis School, Deoghar",
          "location":"B. Deoghar, Jharkhand",
          "subtitle":"Higher Secondary Education",
          "yearStart":"2005",
          "yearEnd":"2011"
        },
        
        {
          "title":"St. Francis School, Jasidih",
          "location":"B. Deoghar, Jharkhand",
          "subtitle":"Primary Education",
          "yearStart":"1999",
          "yearEnd":"2005",
          "start": true
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
$font-stack: 'Montserrat', sans-serif;
$font-color: #fff;
$bg-color: #fff;
$dark-blue: #2E4A62;
$light-blue: #4e9bfa;

@mixin clearfix {
  content: '';
  position: absolute;
  top: 0; left: 0;
}
@mixin set-border($thickness, $color, $radius) {
  border: $thickness solid $color;
  border-radius: $radius;
}

body {
    background-color: $bg-color;
}
*, *::before, *::after {
    margin: 0; padding: 0;
	  box-sizing: border-box;
	  font-family: $font-stack;
	  color: $font-color;
}
main {
  width: 32em;
    height: 100%;
    margin: 1em auto;
    padding: 40px;
    background: $dark-blue;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
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
    &.year__gap
    {
    margin: 60px 35px;
    }
    &>span {
      @include clearfix();
      left: -25px;
      height: 110%;
      @include set-border(2px, $font-color, none);
    }
    &>span::before, &>span::after {
      @include clearfix();
      width: 14px; height: 14px;
      @include set-border(3px, $font-color, 50%);
      left: -7px;
      background: $light-blue;
    }
    &>span::before {
      top: -15px;
    }
    &>span::after {
      top: 100%;
    }
    div {
      &:nth-child(2) {
        font-size: 1.2em;
      }
      &:nth-child(3), &:nth-child(4) {
        font-size: 1em;
        font-style: italic;
        color: darken($font-color, 25%);
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -85px;
      width: 40px;
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
