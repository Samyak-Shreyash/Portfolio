import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Hssome",
        component: Home
    },
    {
        path: "/profile",
        name: "About",
        component: () =>
            import ("../views/profile.vue")
    },
    {
        path: "/prjects",
        name: "Projects",
        component: () =>
            import ("../views/projects.vue")
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: () =>
            import ("../views/blogs.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;