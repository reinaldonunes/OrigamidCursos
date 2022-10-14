import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue"
import AboutUs from "./views/AboutUs.vue"
import CoursesPage from "./views/CoursesPage.vue"
import CourseData from "./views/CourseData.vue";
import LessonAct from "./views/LessonAct.vue"
import LessonDescription from "./views/LessonDescription.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/about",
      component: AboutUs
    },
    {
      path: "/courses",
      component: CoursesPage,
      props: true,
      children:[
        {
          name: 'course',
          path: ":namecourse",
          component: CourseData,
          props: true,
          children: [
            {
              name: "lessons",
              path: "lessons",
              component: LessonAct
            },
            {
              name: "description",
              path: "description",
              component: LessonDescription
            },
          ]
        }
      ]
    }
  ]
});

