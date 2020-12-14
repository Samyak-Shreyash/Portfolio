import { createStore } from "vuex";
import themes from "@/store/modules/themes";
import display from "@/store/modules/display";
import blogs from "@/store/modules/blogs";
import schools from "@/store/modules/schools";
import jobs from "@/store/modules/jobs";

export default createStore({
  modules: {
    themes,
    display,
    blogs,
    schools,
    jobs
  }
});
