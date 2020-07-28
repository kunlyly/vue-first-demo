import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Contact from '../view/Contact.vue';
// const routerHistory = createWebHistory()
const router = createRouter({
  history: createWebHistory(),
  routes: [
        {
            path : '/',
            component : Home,
        },
        {
            path : '/contact',
            component : Contact,
        }
  ],
})

export default router