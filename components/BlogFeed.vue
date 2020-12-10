<template>
  <div>
    <ul :class="['blog__feed', displayClass, themeClass]">
      <li
        v-for="post in allBlogs"
        :class="['preview', displayClass, themeClass]"
        :key="post._id"
      >
        <figure
          :class="['preview__figure']"
          :style="{ backgroundImage: `url(${post.imgUrl})` }"
          @mouseover="$event.currentTarget.classList.add('hoverList')"
          @mouseleave="$event.currentTarget.classList.remove('hoverList')"
        >
          <figcaption class="preview__details">
            <router-link class="preview__title" :to="post.markdownLink">
              {{ post.title }}
            </router-link>
            <div class="preview__meta">
              <time class="preview__published">
                {{ prettyDate(post.createdAt) }}
              </time>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BlogFeed",
  props: ["themeClass", "displayClass"],
  methods: {
    ...mapActions(["fetchBlogs"]),
    prettyDate(date) {
      return new Date(date)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ")
        .replace(/( \d+)$/, ",$1");
    }
  },

  computed: mapGetters(["allBlogs"]),

  created() {
    this.fetchBlogs();
  }
};
</script>

<style scoped lang="scss">
.blog__feed {
  position: relative;
  min-height: 100vh;
  max-width: 90rem;
  margin: 0 auto;
  padding-top: 6.35rem;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 0.625rem;
}
.preview {
  list-style: none;
  width: calc(100% / 3 -5rem);
  margin: 2.5rem;
  &.mobile {
    position: relative;
    width: calc(100%-5rem);
  }
}
.preview__figure {
  padding-top: 100%;
  padding-left: 120%;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.preview__details {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.preview__title {
  text-decoration: none;
  display: block;
  height: 100%;
  padding: 0.75rem;
  color: #bbb;
  font: outline;
}

.preview__meta {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  white-space: nowrap;
}
.preview__published {
  margin: 0;
  padding: 0;
  border-radius: 0;
  border: none;
  outline: none;
  background: none;
}
</style>
