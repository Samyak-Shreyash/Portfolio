<template>
  <main class="blog" :class="{ blog__reading: this.post }">
    <blog-nav :content="content" :filters="filters" :navs="navs" />
    <blog-feed :filters="filters" />
    <blog-post :post="post" />
  </main>
</template>
<script>
import BlogNav from "@/components/BlogNav";
import BlogFeed from "@/components/BlogFeed";
import BlogPost from "@/components/BlogPost";

export default {
  name: "blogs",
  components: {
    BlogFeed,
    BlogNav,
    BlogPost
  },
  resource: "Blog",
  props: {
    post: String,
    Tags: String,
    themeClass: String,
    displayClass: String
  },
  data() {
    return {
      navs: 0,
      title: "",
      labels: {
        post: "",
        Tags: ""
      }
    };
  },
  computed: {
    content() {
      return { title: this.title, labels: this.labels };
    },
    filters() {
      let filters = {};

      if (this.post) filters.post = this.post;
      if (this.Tags) filters.Tags = this.Tags;

      return filters;
    }
  }
};
</script>
