const state = {
  display: "desktop"
};

const getters = {
  display: state => state.display
};

const actions = {
  async getDisplay({ commit }) {
    commit("setDisplay");
  },
  updateDisplay({ commit }) {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)")
      .matches;
    commit("updateMobileState", isMobile);
  }
};

const mutations = {
  setDisplay: state => state.display,
  updateMobileState: (state, isMobile) => {
    state.display = isMobile ? "mobile" : "desktop";
    return state.display;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
