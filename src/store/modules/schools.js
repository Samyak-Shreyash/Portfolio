import axios from "axios";
const path = "localhost:3000";
const _url = "http://" + path + "/schools";
const state = {
  schools: [],
  currSchool: "",
  currDegree: ""
};

const getters = {
  allSchools: state => state.schools,
  latestSchool: state => state.currSchool,
  latestDegree: state => state.currDegree
};

const actions = {
  async fetchSchools({ commit }) {
    const response = await axios.get(_url);
    // console.log(response.data);
    commit("setSchools", response.data);
  }
};

const mutations = {
  setSchools: (state, schools) => {
    state.schools = schools;
    state.currSchool = schools[0].title;
    state.currDegree = schools[0].subtitle;
    return state.schools;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
