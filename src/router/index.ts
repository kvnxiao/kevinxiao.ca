import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
const Projects = () => import(/* webpackChunkName: "projects" */ "@/views/Projects.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
