import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import AboutContainer from './components/about/AboutContainer.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutContainer },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
