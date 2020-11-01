import { createStore } from "vuex";
import themes from "@/store/modules/themes";
import display from "@/store/modules/display";

export default createStore({
  modules: {
    themes,
    display
  }
});
