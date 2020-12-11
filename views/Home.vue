<template>
  <div>
    <div
      @scroll="ScrollDown"
      :class="['hero', themeClass]"
      :style="{
        backgroundImage:
          homeBackground() ||
          url(
            'https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'
          )
      }"
    >
      <div class="container" :class="{ newLine: nextLine }">
        <span
          :class="[
            'intro',
            { 'big-word': bigWord },
            { introduction: intro },
            themeClass,
            displayClass
          ]"
        >
          I am
        </span>
        <p :class="['space', { newLine: nextLine }, themeClass, displayClass]">
          &nbsp;
        </p>
        <span
          :class="[
            'articles',
            { 'big-word': bigWord },
            { article: !article },
            themeClass,
            displayClass
          ]"
        >
          a
        </span>
        <p :class="['space', { newLine: nextLine }, themeClass, displayClass]">
          &nbsp;
        </p>
        <span
          :class="[
            'typed-text',
            { 'big-word': bigWord },
            themeClass,
            displayClass
          ]"
        >
          {{ typeValue }}
        </span>
        <span
          :class="[
            'cursor',
            { greeting: intro },
            { 'big-word': bigWord },
            themeClass,
            displayClass,
            { typing: typeStatus }
          ]"
          >&nbsp;</span
        >
      </div>
    </div>

    <HomeHero :theme-class="themeClass" :display-class="displayClass" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/HomeHero.vue";

export default {
  name: "Home",
  data: () => {
    return {
      typeValue: "",
      greeted: false,
      article: false,
      intro: true,
      bigWord: false,
      typeStatus: false,
      nextLine: false,
      greetWord: ["Hello", "Hi", "Welcome", "Namaste"],
      typeArray: [
        "Samyak Shreyash",
        "coder",
        "web-developer",
        "data Scientist"
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: -1,
      charIndex: 0
    };
  },
  components: {
    HomeHero
  },
  props: ["displayClass", "themeClass"],

  methods: {
    checkBigWord(index) {
      this.bigWord = index > 6;
    },
    homeBackground() {
      var screen = this.displayClass.trim() == "mobile" ? "mobile" : "desktop";
      return (
        "url(" +
        require("@/assets/images/" +
          (screen || "desktop") +
          "_" +
          (this.themeClass.trim() || "light") +
          ".jpg") +
        ")"
      );
    },

    greetInit() {
      if (!this.greeted) {
        this.typeArrayIndex =
          this.typeArrayIndex < 0
            ? Math.ceil(Math.random() * 100) % this.greetWord.length
            : this.typeArrayIndex;
        // console.log("greet " + this.greetWord[this.typeArrayIndex]);
        if (this.charIndex < this.greetWord[this.typeArrayIndex].length) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue += this.greetWord[this.typeArrayIndex].charAt(
            this.charIndex
          );
          this.checkBigWord(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.greetInit, this.typingSpeed);
        } else {
          this.greeted += 1;
          this.typeStatus = false;
          setTimeout(this.greetInit, this.newTextDelay + 500);
        }
      } else {
        if (this.charIndex > 0) {
          if (!this.typeStatus) this.typeStatus = true;

          this.typeValue = this.greetWord[this.typeArrayIndex].substring(
            0,
            this.charIndex - 1
          );
          this.charIndex -= 1;
          setTimeout(this.greetInit, this.erasingSpeed);
        } else {
          this.typeStatus = false;
          this.typeArrayIndex = 0;
          this.charIndex = 0;
          this.greeted = !this.greeted;
          this.intro = false;
          this.typeValue = "";
          setTimeout(this.typeText, this.newTextDelay + 600);
        }
      }
    },

    typeText() {
      this.nextLine = this.displayClass == "desktop";
      // console.log("Next Line: " + this.nextLine);
      // console.log("Type " + this.typeArrayIndex);
      if (this.typeArrayIndex > 0) this.article = true;
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.checkBigWord(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      this.nextLine = this.displayClass == "desktop";
      // console.log("Erase " + this.typeArrayIndex);
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.checkBigWord(this.charIndex);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0;
          this.article = false;
        }
        setTimeout(this.typeText, this.newTextDelay);
      }
    }
  },
  created() {
    setTimeout(this.greetInit, this.newTextDelay + 200);
  }
};
</script>

<style scoped lang="scss">
.hero {
  height: auto;
  text-align: center;
  &.dark {
    background-color: #000;
    color: #aec2d3;
  }
  background-size: cover;
}

.container {
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10% 0 10% 0;
  &.newLine {
    padding-top: 20%;
  }
}

.greets {
  justify-content: center;
  font-size: 8rem;
  font-family: "Segoe", Courier, monospace;

  &.mobile {
    font-size: 6rem;
  }
  &.big-word {
    font-size: 6rem;
    &.mobile {
      font-size: 4rem;
    }
  }
}

.articles {
  font-size: 6rem;
  &.article {
    display: none;
  }
  &.mobile {
    font-size: 3rem;
  }
}

.intro {
  font-size: 6rem;
  &.introduction {
    display: none;
  }

  &.mobile {
    font-size: 3rem;
  }
}
.space {
  font-size: 1rem;
  &.newLine {
    display: none;
  }
}

.typed-text {
  font-size: 6rem;
  &.mobile {
    font-size: 3rem;
  }
  &.big-word {
    font-size: 5rem;
    &.mobile {
      font-size: 2rem;
    }
  }
  &.light {
    color: #424242;
  }
  &.dark {
    color: #fff;
  }
}

.cursor.typing {
  font-size: 6rem;
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  &.mobile {
    font-size: 3rem;
  }
  &.dark {
    background-color: #fff;
    animation: cursorBlink-dark 500ms infinite;
  }
  &.light {
    background-color: #000;
    animation: cursorBlink-light 500ms infinite;
  }
}

@keyframes cursorBlink-light {
  from,
  to {
    background-color: #000;
  }
  50% {
    background-color: transparent;
  }
}
@keyframes cursorBlink-dark {
  from,
  to {
    background-color: transparent;
  }
  50% {
    background-color: #fff;
  }
}
</style>
