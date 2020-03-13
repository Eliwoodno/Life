import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';
import Card from '../views/Card.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Main,
  },
  {
    path: '/card/:title',
    name: 'Card',
    component: Card,
}
];

const router = new VueRouter({
  routes,
});

export default router;
