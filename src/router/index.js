import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import CourseDetail from "@/views/CourseDetail/CourseDetail.vue";
import Login from "@/views/Login/Login.vue";
import Blog from "@/views/Blog/Blog.vue";
import SinglePostBlog from "@/views/Blog/SinglePostBlog.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Questions from "@/views/Dashboard/Questions.vue";
import MyCourses from "@/views/Dashboard/MyCourses.vue";
import EditProfile from "@/views/Dashboard/EditProfile.vue";
import Walet from "@/views/Dashboard/Walet.vue";
import Tickets from "@/views/Dashboard/Tickets.vue";
import MyAccount from "@/views/Dashboard/MyAccount.vue"; 
import AddNewTicket from "@/views/Dashboard/AddNewTicket.vue"; 

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
  {
    path: "/dashboard",
    name: 'Dashboard',
    redirect: "/dashboard/home",
    component: Dashboard,
    meta: { title: "پنل کاربری" },
    children: [
      {
        path: "home",
        component: MyAccount,
      },
      {
        path: "my-courses",
        component: MyCourses,
      },
   
      {
        path: "walet",
        component: Walet,
      },
   
      {
        path: "tickets",
        component: Tickets,
      }, {
        path: "add-ticket",
        component: AddNewTicket,
      },
    ],
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
