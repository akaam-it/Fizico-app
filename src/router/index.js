import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import CourseDetail from "@/views/CourseDetail/CourseDetail.vue";
import Login from "@/views/Login/Login.vue";
import Blog from "@/views/Blog/Blog.vue";
import SinglePostBlog from "@/views/Blog/SinglePostBlog.vue";
import NotFound from "@/views/NotFound/NotFound.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: { title: "فیزیکو - خطای 404 " },
  },
  {
    path: "/courses",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "فیزیکو - آموزش صفرتاصد فیزیک دبیرستان و کنکور" },
  },
  {
    path: "/course/:id",
    name: "CourseDetail",
    component: CourseDetail,
    props: true,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    props: true,
    meta: { title: "مقالات" },
  },
  {
    path: "/blog/:id",
    name: "SinglePostBlog",
    component: SinglePostBlog,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "ورود به حساب کاربری" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

let loaderInstance = null;

router.beforeEach((to, from, next) => {
  if (!loaderInstance) {
    loaderInstance = document.createElement("div");
    loaderInstance.innerHTML = `<div class="loader-overlay"><div class="loader"></div></div>`;
    document.body.appendChild(loaderInstance);
  }
  loaderInstance.style.display = "flex";
  next();
});

router.afterEach((to) => {
  setTimeout(() => {
    if (loaderInstance) loaderInstance.style.display = "none";
  }, 100);
  document.title = to.meta.title;
});

export default router;
