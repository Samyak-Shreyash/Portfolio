<template>
  <main>
    <TimelineView
      :title="getJobTitle()"
      :timeline-Data="getJobs()"
      :theme-class="themeClass"
      :display-class="displayClass"
    />
    <TimelineView
      :title="getEducationTitle()"
      :timeline-Data="getEducation()"
      :theme-class="themeClass"
      :display-class="displayClass"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import TimelineView from "@/components/timeline.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PortFolio",
  components: {
    TimelineView
  },
  props: ["themeClass", "displayClass"],
  methods: {
    ...mapActions(["fetchSchools", "fetchJobs"]),
    getEducationTitle() {
      return { data: "Education", gap: false };
    },
    getEducation() {
      return this.allSchools;
    },
    getJobTitle() {
      return { data: "Experience", gap: true };
    },
    getJobs() {
      return this.allJobs;
    }
  },

  computed: mapGetters([
    "allSchools",
    "latestSchool",
    "latestDegree",
    "allJobs",
    "latestJob",
    "latestDesignation"
  ]),

  created() {
    this.fetchSchools();
    this.fetchJobs();
  }
};
</script>
