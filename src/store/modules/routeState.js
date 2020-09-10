import router from "@/router";


const state = {
    setRouteLinks: []
};

const getters = {
    allRoutes: state => state.routeLinks
};

const actions = {
    fetchRouteLinks({ commit }) {
        const response = router.routeLinks;
        console.log(response);
        commit('setRouteLinks', response);
    }
};

const mutations = {
    setRouteLinks: (state, routeLinks) => (state.routeLinks = routeLinks),
};

export default {
    state,
    getters,
    actions,
    mutations
};