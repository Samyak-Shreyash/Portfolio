import axios from "axios";
const path = "localhost:3000";
const _url = "http://" + path + "/jobs";
const state = {
  jobs: [],
  currJob: "",
  currDesignation: ""
};

const getters = {
  allJobs: state => state.jobs,
  latestJob: state => state.currJob,
  latestDesignation: state => state.currDesignation
};

const actions = {
  async fetchJobs({ commit }) {
    const response = await axios.get(_url);
    console.log(response.data);
    commit("setJobs", response.data);
  }
};

const mutations = {
  setJobs: (state, jobs) => {
    state.jobs = jobs;
    state.currJob = jobs[0].title;
    state.currDesignation = jobs[0].subtitle;
    return state.jobs;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
