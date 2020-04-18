import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import NotFoundComponent from "../components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    //:<param> indicates a dynamic route
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //import(/* webpackChunkName: "about" */ "../views/EventShow.vue")

    //Alternate for alias routing
    //alias: "/about"
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
    //alias for redirect
    //path: "/about",
    //redirect: { name: "about" }
  },
  { path: "*", component: NotFoundComponent }
];

const router = new VueRouter({
  //This remmoves # from URL. If a URL is directly requested from the server,
  // it will return 404 because the page doesn't exist on the server.
  // Configure prod server to return index.html for all 404 errors.
  mode: "history",
  routes
});

export default router;
