const state = {
  mobile: false,
  display: "desktop"
};

const getters = {
  mobile: state => state.mobile,
  display: state => state.display
};

const actions = {
  async getMobile({ commit }) {
    commit("setMobile");
  },
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
  setMobile: state => state.mobile,
  updateMobileState: (state, isMobile) => {
    (state.mobile = isMobile),
      (state.display = state.mobile ? "mobile" : "desktop");
    return state.display;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
