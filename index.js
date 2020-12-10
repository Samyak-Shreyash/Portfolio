import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Intro",
        props: true,
        component: Home
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        props: true,
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/portfolio.vue")
    },
    {
        path: "/projects",
        name: "Projects",
        props: true,
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/projects.vue")
    },
    {
        path: "/blogs",
        name: "Blogs",
        props: true,
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/blogs.vue")
    },
    {
        path: "/insight",
        name: "Insight",
        props: true,
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/insights.vue")
    },
    {
        path: "/contact",
        name: "Contacts",
        props: true,
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/contact.vue")
    },
    {
        path: "/blogs/read/:markdown",
        name: "markdown",
        props: true,
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/read.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;