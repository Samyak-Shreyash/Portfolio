import axios from "axios";
const path = "localhost:3000";
const _url = "http://" + path + "/blogs";
const state = {
  blogs: [],
  currBlog: ""
};

const getters = {
  allBlogs: state => state.blogs,
  markdownBlog: state => state.currBlog
};

const actions = {
  async fetchBlogs({ commit }) {
    const response = await axios.get(_url);
    console.log(response.data);
    commit("setBlogs", response.data);
  },
  async fetchMarkdown({ commit }, markdown) {
    const link =
      "https://raw.githubusercontent.com/Samyak-Shreyash/My-Personal-blogs/master/" +
      markdown +
      ".md";
    const tokn = "token " + "3b025d205371f478852b0524623524e7371e0b97";
    const headr = { authorization: tokn };
    console.log(headr);
    const response = await axios.get(link, { headers: headr });
    commit("getMarkdown", response);
  }
};

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  getMarkdown: (state, blog) => (state.currBlog = blog)
};

export default {
  state,
  getters,
  actions,
  mutations
};
