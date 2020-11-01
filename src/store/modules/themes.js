const state = {
  theme: "light ",
  darkMode: false
};

const getters = {
  theme: state => state.theme,
  darkMode: state => state.darkMode
};

const actions = {
  async getDarkMode({ commit }) {
    commit("getDark");
  },
  async updateDarkMode({ commit }) {
    commit("updateDarkMode");
  },
  async getTheme({ commit }) {
    console.log(this.theme);
    commit("getThemeColor");
  }
};

const mutations = {
  getDark: state => state.darkMode,
  getThemeColor: state => state.theme,
  updateDarkMode: state => {
    state.darkMode = !state.darkMode;
    state.theme = state.darkMode ? "dark" : "light";
    return state.darkMode;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
